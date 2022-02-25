import { Component } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.less']
})
export class CardComponent {
    showtitle = '';
    changeAct = true;
    todo = [
        {id: 1 ,name: 'Аналитик', setclass: 'showUprav', time: 12, bg: '#fae6ab', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 2 ,name: 'HR бизнес-партнер', setClass: '', time: 10, bg: '#bff2cf', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 3 ,name: 'Data Scientist PRO', setClass: '', time: 24, bg: '#73bcff', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 4 ,name: 'Графический дизайнер', setClass: '', time: 24, bg: '#47c293', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 5 ,name: 'Режиссёр монтажа', time: 12, bg: '#ffbd98', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 6 ,name: 'Коммерческий иллюстратор', time: 16, bg: '#ffb525', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 7 ,name: '3D-дженералист', time: 24, bg: '#f2b7d3', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 8 ,name: 'Интернет маркетолог', time: 24, bg: '#39a2fe', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 9 ,name: 'SMM-специалист', time: 16, bg: '#DCF4FE', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 10 ,name: 'Менеджер проектов', time: 12, bg: '#FEBCB4', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 11 ,name: 'Сценарист', time: 12, bg: '#39a2fe', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 12 ,name: 'Java-разработчик', time: 9, bg: '#ffbd59', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 13 ,name: 'Python-разработчик', time: 12, bg: '#60b3ff', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 14 ,name: 'Бизнес-аналитик', time: 12, bg: '#95efd6', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 15 ,name: 'Дизайнер интерьеров', time: 12, bg: '#95efd6', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },  
        {id: 16 ,name: '1С-Разработчик', time: 6, bg: '#bff2cf', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 17 ,name: 'Инженер по тестированию', time: 12, bg: '#77cdfa', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 18 ,name: 'Редактор с нуля до PRO', time: 12, bg: '#FFDF6E', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' }, 
        {id: 19 ,name: 'Геймдизайнер с нуля до PRO', time: 12, bg: '#f2b7d3', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' }, 
        {id: 20 ,name: 'Веб-Разработчик', time: 24, bg: '#95efd6', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
        {id: 21 ,name: 'Java-разработчик PRO', time: 24, bg: '#fae6ab', img: 'https://back.skillbox.by/uploads/courses/banner/phone_b445249f36345113a1ec318eb208c3339f986719.png' },
      ]
      num = 10;

      showMore(){
        this.num += 4;
      }


}