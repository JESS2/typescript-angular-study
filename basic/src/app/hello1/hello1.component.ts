import { Component } from '@angular/core';

@Component({
    selector: 'app-hello1', //Hello1Component를 사용하기 위한 태그는 <app-hello1>이다.
    template: '<div> {{ message }} </div>', //컴포넌트의 html 태그 탬플릿을 여기에 직접 입력한다.
    //templateUrl: './app.component.html' //컴포넌트의 html 태그 탬플릿 파일을 지정한다.
    styles: [ 'div { padding: 10px; margin: 10px; border: 1px solid gray; }' ] //컴포넌트의 css 서식을 여기에 직접 입력한다.
    //styleUrls: ['./app.component.css'] //컴포넌트의 css 서식 파일을 지정한다.
})

export class Hello1Component {
    message = 'Hello world!!';
}