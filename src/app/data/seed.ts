import { Board, Subtask, Task } from '../../types';

const subtasks = (taskId: string, items: [title: string, completed: boolean][]): Subtask[] =>
  items.map(([title, completed], index) => ({
    id: `${taskId}-s${index + 1}`,
    title,
    completed,
  }));

export const SEED_BOARDS: Board[] = [
  {
    id: 'launch',
    name: 'Platform Launch',
    columns: [
      { id: 'launch-todo', name: 'Todo' },
      { id: 'launch-doing', name: 'Doing' },
      { id: 'launch-done', name: 'Done' },
    ],
  },
  {
    id: 'marketing',
    name: 'Marketing Plan',
    columns: [
      { id: 'marketing-backlog', name: 'Backlog' },
      { id: 'marketing-progress', name: 'In Progress' },
      { id: 'marketing-review', name: 'Review' },
      { id: 'marketing-published', name: 'Published' },
    ],
  },
  {
    id: 'roadmap',
    name: 'Roadmap',
    columns: [
      { id: 'roadmap-now', name: 'Now' },
      { id: 'roadmap-next', name: 'Next' },
      { id: 'roadmap-later', name: 'Later' },
    ],
  },
];

export const SEED_TASKS: Task[] = [
  // Platform Launch
  {
    id: 'launch-1',
    boardId: 'launch',
    columnId: 'launch-todo',
    title: 'Build UI for onboarding flow',
    description:
      'Create the screens that guide new users through their first steps in the application.',
    subtasks: subtasks('launch-1', [
      ['Build the welcome screen', false],
      ['Build the account setup screen', false],
      ['Check the layout on mobile', false],
    ]),
  },
  {
    id: 'launch-2',
    boardId: 'launch',
    columnId: 'launch-todo',
    title: 'Build UI for search',
    description: 'Create a search interface that helps users find tasks by their title.',
    subtasks: subtasks('launch-2', [
      ['Add the search input', false],
      ['Design the search results', false],
      ['Design the empty results state', false],
    ]),
  },
  {
    id: 'launch-3',
    boardId: 'launch',
    columnId: 'launch-todo',
    title: 'Build settings UI',
    description:
      'Prepare the settings screen with sections for profile details and application preferences.',
    subtasks: [],
  },
  {
    id: 'launch-4',
    boardId: 'launch',
    columnId: 'launch-doing',
    title: 'Design settings and search pages',
    description:
      'Prepare consistent layouts for the settings and search screens using the existing design system.',
    subtasks: subtasks('launch-4', [
      ['Review the existing components', true],
      ['Prepare the settings layout', false],
      ['Prepare the search layout', false],
    ]),
  },
  {
    id: 'launch-5',
    boardId: 'launch',
    columnId: 'launch-doing',
    title: 'Design onboarding flow',
    description:
      'Plan a short onboarding flow that explains the main features without overwhelming new users.',
    subtasks: subtasks('launch-5', [
      ['Define the onboarding steps', true],
      ['Write the introductory text', true],
      ['Review the flow with the team', false],
    ]),
  },
  {
    id: 'launch-6',
    boardId: 'launch',
    columnId: 'launch-doing',
    title: 'Research pricing points of various competitors and trial different business models',
    description:
      'Compare competitor pricing and prepare a first pricing proposal for the application.',
    subtasks: subtasks('launch-6', [
      ['Research competitor pricing and business models', true],
      ['Outline a business model that works for our solution', false],
      ['Ask potential customers about their pricing expectations', false],
    ]),
  },
  {
    id: 'launch-7',
    boardId: 'launch',
    columnId: 'launch-done',
    title: 'Conduct 5 wireframe tests',
    description: 'Test the main wireframes with five participants and record usability issues.',
    subtasks: subtasks('launch-7', [
      ['Prepare the testing scenarios', true],
      ['Run the testing sessions', true],
      ['Summarise the feedback', true],
    ]),
  },
  {
    id: 'launch-8',
    boardId: 'launch',
    columnId: 'launch-done',
    title: 'Create wireframe prototype',
    description: 'Connect the main wireframes into a clickable prototype for usability testing.',
    subtasks: subtasks('launch-8', [
      ['Connect the main screens', true],
      ['Check the prototype navigation', true],
    ]),
  },
  {
    id: 'launch-9',
    boardId: 'launch',
    columnId: 'launch-done',
    title: 'Competitor analysis',
    description:
      'Review similar task management applications and identify their strengths and limitations.',
    subtasks: subtasks('launch-9', [
      ['Choose applications to compare', true],
      ['Document the main findings', true],
    ]),
  },

  // Marketing Plan
  {
    id: 'marketing-1',
    boardId: 'marketing',
    columnId: 'marketing-backlog',
    title: 'Plan the launch announcement',
    description: 'Outline the key messages and channels for the product launch announcement.',
    subtasks: subtasks('marketing-1', [
      ['Define the key messages', false],
      ['Choose the announcement channels', false],
      ['Draft the announcement text', false],
    ]),
  },
  {
    id: 'marketing-2',
    boardId: 'marketing',
    columnId: 'marketing-backlog',
    title: 'Prepare a content calendar',
    description: 'Schedule blog posts and social media updates for the first month after launch.',
    subtasks: subtasks('marketing-2', [
      ['Collect content ideas', false],
      ['Assign publishing dates', false],
    ]),
  },
  {
    id: 'marketing-3',
    boardId: 'marketing',
    columnId: 'marketing-progress',
    title: 'Write the launch email sequence',
    description: 'Create a series of onboarding emails for people who sign up before the launch.',
    subtasks: subtasks('marketing-3', [
      ['Write the welcome email', true],
      ['Write the feature highlights email', false],
      ['Write the follow-up email', false],
    ]),
  },
  {
    id: 'marketing-4',
    boardId: 'marketing',
    columnId: 'marketing-progress',
    title: 'Design social media graphics',
    description: 'Prepare a consistent set of visuals for announcement posts.',
    subtasks: subtasks('marketing-4', [
      ['Create the banner template', true],
      ['Prepare the post visuals', false],
    ]),
  },
  {
    id: 'marketing-5',
    boardId: 'marketing',
    columnId: 'marketing-review',
    title: 'Review landing page copy',
    description: 'Check the landing page text for clarity and a consistent tone of voice.',
    subtasks: subtasks('marketing-5', [
      ['Proofread the headlines', true],
      ['Check the call-to-action wording', false],
    ]),
  },
  {
    id: 'marketing-6',
    boardId: 'marketing',
    columnId: 'marketing-published',
    title: 'Publish the product teaser',
    description: 'Share a short teaser video to build interest before the launch.',
    subtasks: subtasks('marketing-6', [
      ['Record the teaser', true],
      ['Publish it on social channels', true],
    ]),
  },
  {
    id: 'marketing-7',
    boardId: 'marketing',
    columnId: 'marketing-published',
    title: 'Set up analytics tracking',
    description: 'Connect analytics to measure campaign traffic and sign-ups.',
    subtasks: [],
  },

  // Roadmap (колонка Later пустая специально)
  {
    id: 'roadmap-1',
    boardId: 'roadmap',
    columnId: 'roadmap-now',
    title: 'Implement board routing',
    description: 'Add routes for boards, task details and board editing.',
    subtasks: subtasks('roadmap-1', [
      ['Define the route tree', true],
      ['Add the board page', true],
      ['Add the 404 page', false],
    ]),
  },
  {
    id: 'roadmap-2',
    boardId: 'roadmap',
    columnId: 'roadmap-now',
    title: 'Move tasks between columns',
    description: 'Allow changing the column of a task directly from the task details.',
    subtasks: subtasks('roadmap-2', [
      ['Choose the interaction pattern', false],
      ['Update the task column', false],
    ]),
  },
  {
    id: 'roadmap-3',
    boardId: 'roadmap',
    columnId: 'roadmap-next',
    title: 'Persist data in local storage',
    description: 'Keep boards and tasks between page reloads.',
    subtasks: [],
  },
  {
    id: 'roadmap-4',
    boardId: 'roadmap',
    columnId: 'roadmap-next',
    title: 'Add task search',
    description: 'Let users find tasks by title using a query parameter.',
    subtasks: subtasks('roadmap-4', [
      ['Add the search field', false],
      ['Read the query parameter', false],
    ]),
  },
];
