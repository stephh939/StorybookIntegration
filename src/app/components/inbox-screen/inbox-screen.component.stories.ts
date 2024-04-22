import type { Meta, StoryObj } from '@storybook/angular';
import { InboxScreenComponent } from './inbox-screen.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<InboxScreenComponent> = {
  component: InboxScreenComponent,
  title: 'InboxScreenComponent',
};
export default meta;
type Story = StoryObj<InboxScreenComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/inbox-screen works!/gi)).toBeTruthy();
  },
};
