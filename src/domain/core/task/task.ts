import { Model } from "./../../shared/model/model";

export interface TaskProps {
  id: string;
  title: string;
}

export class Task extends Model<string> {
  static createTask(title: string): Task {
    return new Task("", title);
  }

  static createTaskFromJson(json: TaskProps): Task {
    return new Task(json.id, json.title);
  }

  private _title: string;
  private _createdAt: Date;

  private constructor(id: string, title: string) {
    super(id);
    this._createdAt = new Date();
    this._title = title.trim();
  }

  get title(): string {
    return this._title;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get humanReadableCreatedAt(): string {
    return this._createdAt.toString();
  }

  public toJson(): TaskProps {
    const parentJson = super.toJson();

    return { ...parentJson, title: this.title, createdAt: this.createdAt };
  }
}
