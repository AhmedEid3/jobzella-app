export interface Task {
  id: string;
  title: string;
  description: string;
  assignees: Assignee[];
  status: TaskStatus;
  group: TaskGroup;
  attachments: Attachment[];
  createdAt: String;
  updatedAt: String;
}

export interface Assignee {
  id: string;
  name: string;
  avatarUrl: string;
}

export interface Attachment {
  id: string;
  filename: string;
  url: string;
}

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface TaskGroup {
  id: string;
  name: string;
  iconUrl: string;
}
