import {
  CurrencyPipe,
  DatePipe,
  NgClass,
  NgFor,
  NgStyle,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import TruncatePipe from '../../pipes/truncate.pipe';
interface Tasks {
  description: string;
  isCompleted: boolean;
  priority: number;
}
@Component({
  selector: 'app-my-component',
  imports: [
    NgFor,
    NgClass,
    NgStyle,
    FormsModule,
    DatePipe,
    CurrencyPipe,
    UpperCasePipe,
    TruncatePipe,
  ],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.css',
})
export class MyComponentComponent {
  tasks: Tasks[] = [
    {
      description: 'Groccery Shopping !',
      isCompleted: false,
      priority: 5,
    },
    {
      description: 'Laundry',
      isCompleted: false,
      priority: 2,
    },
    {
      description: 'Pay Bills',
      isCompleted: false,
      priority: 3,
    },
    {
      description: 'Book Appointment',
      isCompleted: false,
      priority: 1,
    },
    {
      description: 'Wash the car',
      isCompleted: false,
      priority: 4,
    },
  ];
  checkTodo(task: Tasks) {
    task.isCompleted = !task.isCompleted;
  }

  getTaskClasses(task: Tasks, index: number): { [key: string]: boolean } {
    return {
      completed: task.isCompleted,
      pending: !task.isCompleted,
      even: index % 2 === 0,
      odd: index % 2 !== 0,
    };
  }
  addTodo(e: Event): void {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const formData: FormData = new FormData(target);
    const input = formData.get('inputText')?.toString().trim();

    if (!input) {
      return;
    }
    this.tasks.push({
      description: input,
      isCompleted: false,
      priority: 2,
    });
    target.reset();
  }
  selectedValue: string = '';

  get sortedTasks(): Tasks[] {
    return [...this.tasks].sort((a, b) => {
      switch (this.selectedValue) {
        case 'priority':
          return a.priority - b.priority;
        case 'isCompleted':
          return Number(a.isCompleted) - Number(b.isCompleted);
        case 'description':
          return a.description.localeCompare(b.description);
        default:
          return 0;
      }
    });
  }

  trackByFn(index: number, item: Tasks) {
    return item.description;
  }
  myDate: Date = new Date();
  price: number = 1234.567;
}
