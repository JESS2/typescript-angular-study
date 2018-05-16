import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hello4',
    templateUrl: './hello4.component.html',
    styleUrls: ['./hello4.component.css']
})

export class Hello4Component implements OnInit {
    constructor() { }
    ngOnInit() { }

    title: string = '인사말';
    messages: Message[] = [
        new Message('한국어', '안녕하세요'),
        new Message('영어', 'Hello')
    ];
}

class Message {
    language: string;
    content: string;

    constructor(language: string, content: string) {
        this.language = language;
        this.content = content;
    }
}