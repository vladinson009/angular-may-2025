import { Component, input, InputSignal } from '@angular/core';
import { PostShape } from '../../types/Posts';

@Component({
  selector: 'app-aside-post',
  imports: [],
  templateUrl: './aside-post.component.html',
  styleUrl: './aside-post.component.css',
})
export class AsidePostComponent {
  post: InputSignal<PostShape> = input.required<PostShape>();
}
