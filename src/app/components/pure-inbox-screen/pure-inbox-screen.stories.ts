
import type { Meta, StoryObj } from '@storybook/angular';

import {importProvidersFrom, input} from '@angular/core';

import { Store, NgxsModule } from '@ngxs/store';
import {TasksState} from "../../state/task.state";

import { moduleMetadata, applicationConfig } from '@storybook/angular';

import {fireEvent, userEvent, within} from '@storybook/test';

import { CommonModule } from '@angular/common';

import {PureInboxScreenComponent} from './pure-inbox-screen.component';

import {TaskModule} from "../task.module";

const meta: Meta<PureInboxScreenComponent> = {
  component: PureInboxScreenComponent,
  title: 'PureInboxScreen',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CommonModule, TaskModule],
    }),
    applicationConfig({
      providers: [Store, importProvidersFrom(NgxsModule.forRoot([TasksState]))],
    }),
  ],
};

export default meta;
type Story = StoryObj<PureInboxScreenComponent>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: true,
  },
};

export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // let secondCheckBox = canvas;
    console.log(canvas.getByLabelText('archiveTask-1'));

    // Simulates pinning the first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
    // Simulates archiving the second task
    // await userEvent.click(canvas.getByLabelText('archiveTask-2'));


  },
};
