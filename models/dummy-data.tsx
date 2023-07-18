import { Assignee, Task, TaskGroup, TaskStatus } from '@/models/task';

const assignees: Array<Assignee> = [
  {
    id: '1',
    name: 'John Doe',
    avatarUrl: '/images/assignee_1.png',
  },
  {
    id: '2',
    name: 'Jane Doe',
    avatarUrl: '/images/assignee_2.png',
  },
  {
    id: '3',
    name: 'John Smith',
    avatarUrl: '/images/assignee_3.png',
  },
  {
    id: '4',
    name: 'Jane Smith',
    avatarUrl: '/images/assignee_4.png',
  },
];

export const TaskGroupsDummy: Array<TaskGroup> = [
  {
    id: '1',
    name: 'Design',
    iconUrl: '/images/icon-design.svg',
  },
  {
    id: '2',
    name: 'Development',
    iconUrl: '/images/icon-development.svg',
  },
  {
    id: '3',
    name: 'Marketing',
    iconUrl: '/images/icon-marketing.svg',
  },
  {
    id: '4',
    name: 'Requirement',
    iconUrl: '/images/icon-requirement.svg',
  },
];

export const TasksDummy: Array<Task> = [
  {
    id: '1',
    title: 'UI/UX Design',
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    assignees: [assignees[0], assignees[1], assignees[2]],
    status: TaskStatus.TODO,
    group: TaskGroupsDummy[0],
    attachments: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Frontend Development',
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    assignees: [assignees[0], assignees[1], assignees[2]],
    status: TaskStatus.TODO,
    group: TaskGroupsDummy[1],
    attachments: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Backend Development',
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    assignees: [assignees[0], assignees[1], assignees[2]],
    status: TaskStatus.DONE,
    group: TaskGroupsDummy[1],
    attachments: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '4',
    title: 'Marketing Campaign',
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    assignees: [assignees[0], assignees[1], assignees[2]],
    status: TaskStatus.IN_PROGRESS,
    group: TaskGroupsDummy[2],
    attachments: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '5',
    title: 'Requirement Analysis',
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    assignees: [assignees[0], assignees[1], assignees[2]],
    status: TaskStatus.DONE,
    group: TaskGroupsDummy[3],
    attachments: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '6',
    title: 'UI/UX Design',
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    assignees: [assignees[0], assignees[1], assignees[2]],
    status: TaskStatus.TODO,
    group: TaskGroupsDummy[0],
    attachments: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '7',
    title: 'UI/UX Design',
    description:
      "Brainstorming brings team members' diverse experience into play. ",
    assignees: [assignees[0], assignees[1], assignees[2]],
    status: TaskStatus.IN_PROGRESS,
    group: TaskGroupsDummy[0],
    attachments: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
