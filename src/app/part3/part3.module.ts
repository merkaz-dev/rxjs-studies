import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../material.module';
import { Part3RoutingModule } from './part3-routing.module';
import { Part3Component } from './part3.component';
import { BufferComponent } from './buffer/buffer.component';
import { Buffer1Component } from './buffer1/buffer1.component';
import { Buffer2Component } from './buffer2/buffer2.component';
import { Buffer3Component } from './buffer3/buffer3.component';
import { CheckedComponent } from './checked/checked.component';
import { LoadingComponent } from './loading/loading.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MessagesComponent } from './messages/messages.component';
import { LoginComponent } from './login/login.component';
import { SearchLessonsComponent } from './search-lessons/search-lessons.component';
import { LessonComponent } from './lesson/lesson.component';
import { PipesModule } from '../pipes/pipes.module';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { ToArrayComponent } from './to-array/to-array.component';
import { YtVideoComponent } from './yt-video/yt-video.component';
import { YtLoaderComponent } from './yt-loader/yt-loader.component';
import { NgSubscribeComponent } from './ng-subscribe/ng-subscribe.component';
import { NgSubscribeDirective } from 'src/ng-subscribe.directive';

@NgModule({
  declarations: [
    LoginComponent,
    Part3Component,
    LessonComponent,
    BufferComponent,
    Buffer1Component,
    Buffer2Component,
    Buffer3Component,
    CheckedComponent,
    LoadingComponent,
    CoursesComponent,
    MessagesComponent,
    CourseDialogComponent,
    SearchLessonsComponent,
    CourseDetailsComponent,
    ToArrayComponent,
    YtVideoComponent,
    YtLoaderComponent,
    NgSubscribeComponent,
    NgSubscribeDirective,
  ],
  imports: [
    PipesModule,
    FormsModule,
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    AppMaterialModule,
    Part3RoutingModule,
    ReactiveFormsModule,
    YouTubePlayerModule,
  ],
  exports: [
    Part3RoutingModule,
    Part3Component,
    LoadingComponent,
    MessagesComponent,
  ],
})
export class Part3Module {}
