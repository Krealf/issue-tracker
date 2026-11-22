export interface TaskConfig {
  maxTasks: number;
  minTasks: number;
  maxSubtasks: number;
}

export interface Subtask {
  id: string;
  title: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'doing' | 'done';
  subtasks: Subtask[];
}

export interface Column {
  id: string;
  name: string;
}

export interface Board {
  id: string;
  name: string;
  columns: Column[];
}

