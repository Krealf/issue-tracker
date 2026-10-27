import { Component } from '@angular/core';
import { Subtask, Task } from '../../types';

@Component({
  imports: [],
  selector: 'app-dashboard',
  styleUrl: './dashboard.scss',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  protected tasks: Task[] = [
    {
      id: 1,
      title: 'Build UI for onboarding flow',
      description:
        'Create the screens that guide new users through their first steps in the application.',
      status: 'todo',
      subtasks: [
        {
          id: 1,
          title: 'Build the welcome screen',
          completed: false,
        },
        {
          id: 2,
          title: 'Build the account setup screen',
          completed: false,
        },
        {
          id: 3,
          title: 'Check the layout on mobile',
          completed: false,
        },
      ],
    },
    {
      id: 2,
      title: 'Build UI for search',
      description: 'Create a search interface that helps users find tasks by their title.',
      status: 'todo',
      subtasks: [
        {
          id: 1,
          title: 'Add the search input',
          completed: false,
        },
        {
          id: 2,
          title: 'Design the search results',
          completed: false,
        },
        {
          id: 3,
          title: 'Design the empty results state',
          completed: false,
        },
      ],
    },
    {
      id: 3,
      title: 'Build settings UI',
      description:
        'Prepare the settings screen with sections for profile details and application preferences.',
      status: 'todo',
      subtasks: [],
    },
    {
      id: 4,
      title: 'Design settings and search pages',
      description:
        'Prepare consistent layouts for the settings and search screens using the existing design system.',
      status: 'doing',
      subtasks: [
        {
          id: 1,
          title: 'Review the existing components',
          completed: true,
        },
        {
          id: 2,
          title: 'Prepare the settings layout',
          completed: false,
        },
        {
          id: 3,
          title: 'Prepare the search layout',
          completed: false,
        },
      ],
    },
    {
      id: 5,
      title: 'Design onboarding flow',
      description:
        'Plan a short onboarding flow that explains the main features without overwhelming new users.',
      status: 'doing',
      subtasks: [
        {
          id: 1,
          title: 'Define the onboarding steps',
          completed: true,
        },
        {
          id: 2,
          title: 'Write the introductory text',
          completed: true,
        },
        {
          id: 3,
          title: 'Review the flow with the team',
          completed: false,
        },
      ],
    },
    {
      id: 6,
      title: 'Research pricing points of various competitors and trial different business models',
      description:
        'Compare competitor pricing and prepare a first pricing proposal for the application.',
      status: 'doing',
      subtasks: [
        {
          id: 1,
          title: 'Research competitor pricing and business models',
          completed: true,
        },
        {
          id: 2,
          title: 'Outline a business model that works for our solution',
          completed: false,
        },
        {
          id: 3,
          title: 'Ask potential customers about their pricing expectations',
          completed: false,
        },
      ],
    },
    {
      id: 7,
      title: 'Conduct 5 wireframe tests',
      description: 'Test the main wireframes with five participants and record usability issues.',
      status: 'done',
      subtasks: [
        {
          id: 1,
          title: 'Prepare the testing scenarios',
          completed: true,
        },
        {
          id: 2,
          title: 'Run the testing sessions',
          completed: true,
        },
        {
          id: 3,
          title: 'Summarise the feedback',
          completed: true,
        },
      ],
    },
    {
      id: 8,
      title: 'Create wireframe prototype',
      description: 'Connect the main wireframes into a clickable prototype for usability testing.',
      status: 'done',
      subtasks: [
        {
          id: 1,
          title: 'Connect the main screens',
          completed: true,
        },
        {
          id: 2,
          title: 'Check the prototype navigation',
          completed: true,
        },
      ],
    },
    {
      id: 9,
      title: 'Competitor analysis',
      description:
        'Review similar task management applications and identify their strengths and limitations.',
      status: 'done',
      subtasks: [
        {
          id: 1,
          title: 'Choose applications to compare',
          completed: true,
        },
        {
          id: 2,
          title: 'Document the main findings',
          completed: true,
        },
      ],
    },
  ];

  calculateDoneSubtasks(subtasks: Subtask[]): number {
    return subtasks.reduce((acc, current) => (current.completed ? acc + 1 : acc), 0);
  }

  getTasksByStatus(status: Task['status']): Task[] {
    return this.tasks.filter((task) => task.status === status)
  }
}
