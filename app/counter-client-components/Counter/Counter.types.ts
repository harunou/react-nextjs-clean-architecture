export interface Controller {
  addButtonClicked: () => Promise<void>;
  removeButtonClicked: () => Promise<void>;
}
