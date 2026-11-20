import { computed, inject, Service, signal } from '@angular/core';
import { Task } from '../../types';
import { TASK_CONFIG } from '../app.config';

@Service()
export class TaskService {
  private readonly _tasks = signal<Task[]>([
    {
      id: crypto.randomUUID(),
      title: 'Build UI for onboarding flow',
      description:
        'Create the screens that guide new users through their first steps in the application.',
      status: 'todo',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Build the welcome screen',
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title: 'Build the account setup screen',
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title: 'Check the layout on mobile',
          completed: false,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Build UI for search',
      description: 'Create a search interface that helps users find tasks by their title.',
      status: 'todo',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Add the search input',
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title: 'Design the search results',
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title: 'Design the empty results state',
          completed: false,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Build settings UI',
      description:
        'Prepare the settings screen with sections for profile details and application preferences.',
      status: 'todo',
      subtasks: [],
    },
    {
      id: crypto.randomUUID(),
      title: 'Design settings and search pages',
      description:
        'Prepare consistent layouts for the settings and search screens using the existing design system.',
      status: 'doing',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Review the existing components',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Prepare the settings layout',
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title: 'Prepare the search layout',
          completed: false,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Design onboarding flow',
      description:
        'Plan a short onboarding flow that explains the main features without overwhelming new users.',
      status: 'doing',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Define the onboarding steps',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Write the introductory text',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Review the flow with the team',
          completed: false,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Research pricing points of various competitors and trial different business models',
      description:
        'Compare competitor pricing and prepare a first pricing proposal for the application.',
      status: 'doing',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Research competitor pricing and business models',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Outline a business model that works for our solution',
          completed: false,
        },
        {
          id: crypto.randomUUID(),
          title: 'Ask potential customers about their pricing expectations',
          completed: false,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Conduct 5 wireframe tests',
      description: 'Test the main wireframes with five participants and record usability issues.',
      status: 'done',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Prepare the testing scenarios',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Run the testing sessions',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Summarise the feedback',
          completed: true,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Create wireframe prototype',
      description: 'Connect the main wireframes into a clickable prototype for usability testing.',
      status: 'done',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Connect the main screens',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Check the prototype navigation',
          completed: true,
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      title: 'Competitor analysis',
      description:
        'Review similar task management applications and identify their strengths and limitations.',
      status: 'done',
      subtasks: [
        {
          id: crypto.randomUUID(),
          title: 'Choose applications to compare',
          completed: true,
        },
        {
          id: crypto.randomUUID(),
          title: 'Document the main findings',
          completed: true,
        },
      ],
    },
  ]);

  private readonly config = inject(TASK_CONFIG)
  readonly tasks = this._tasks.asReadonly();
  readonly todoTaskCount = computed(() => {
    return this._tasks().reduce((acc, current) => (current.status == 'todo' ? acc + 1 : acc), 0);
  });

  changeStatus(id: Task['id'], newStatus: Task['status']): void {
    this._tasks.update((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: newStatus,
            }
          : task,
      ),
    );
  }

  create(newTask: Task): void {
    if (this._tasks().length < this.config.maxTasks) {
      this._tasks.update((tasks) => [...tasks, newTask]);
    }
  }

  remove(taskId: string): void {
    if (this._tasks().length > this.config.minTasks) {
      this._tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
    }
  }
}
