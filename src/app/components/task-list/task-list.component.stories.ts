import type { Meta, StoryObj } from '@storybook/angular';
import { TaskListComponent } from './task-list.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<TaskListComponent> = {
  component: TaskListComponent,
  title: 'TaskListComponent',
};
export default meta;
type Story = StoryObj<TaskListComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/task-list works!/gi)).toBeTruthy();
  },
};
