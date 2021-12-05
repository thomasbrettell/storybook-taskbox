import Task from './Task';

export default {
  component: Task,
  title: 'Task',
};

const Template = args => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args.task,
    state: 'TASK_ARCHIVED',
  },
};

export const LongText = Template.bind({});
LongText.args = {
  task: {
    ...Default.args.task,
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris condimentum rhoncus nunc, id scelerisque neque posuere ac. Quisque sapien nunc, cursus a auctor a, volutpat sit amet neque. Praesent sit amet dolor lacus. Ut nec vulputate ligula, at ornare enim. Duis ac lectus et sapien blandit scelerisque. Etiam dapibus mauris vel eros auctor, ac varius nisi elementum. Aliquam sit amet efficitur purus, nec pharetra dolor. Nulla tempor neque sit amet ex pulvinar tincidunt. Pellentesque malesuada felis risus, ac hendrerit ante scelerisque ut. Maecenas vitae massa mauris. Morbi venenatis lorem et tristique pulvinar. Curabitur auctor cursus massa, auctor fermentum enim venenatis vel. Sed sed magna risus. Sed aliquet egestas felis, non convallis mi laoreet at. Phasellus quis sodales turpis, et scelerisque lectus. Donec vitae elit quis libero venenatis convallis.',
  },
};