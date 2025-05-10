import { promises as fs } from "fs";
import path from "path";
import { CounterRepository } from "@/types/CounterGateway";

const REPOSITORY_FILE_NAME = "counterRepository.local";

const REPOSITORY_FILE_PATH = path.resolve(process.cwd(), REPOSITORY_FILE_NAME);

export class LocalCounterRepository implements CounterRepository {
  static async make(): Promise<LocalCounterRepository> {
    await ensureStorageFileExists();
    return new LocalCounterRepository();
  }

  async getCount(): Promise<number> {
    try {
      const data = await fs.readFile(REPOSITORY_FILE_PATH, "utf-8");
      const value = JSON.parse(data) as { count: number };
      return value.count;
    } catch {
      return 0;
    }
  }

  async setCount(value: number): Promise<void> {
    await fs.writeFile(REPOSITORY_FILE_PATH, JSON.stringify({ count: value }), "utf-8");
  }
}

async function ensureStorageFileExists(): Promise<void> {
  try {
    await fs.access(REPOSITORY_FILE_PATH);
  } catch {
    await fs.writeFile(REPOSITORY_FILE_PATH, JSON.stringify({ count: 0 }), "utf-8");
  }
}
