import { Component } from '@angular/core';

@Component({
  selector: 'app-developer-page',
  templateUrl: './developer-page.component.html',
  styleUrls: ['./developer-page.component.scss']
})
export class DeveloperPageComponent {
  people = [
    { name: 'Задорожний Олександр Васильович', tasks: '1) Створив базу даних для збереження статтей. '
    + '2) Розробив бекендну частину, а саме ендпоїнти.',
      url: 'assets/komar/dev-img/Thador.jpg', alt: 'image 1' },
    { name: 'Комар Максим Леонідович', tasks: 'Створив вкладку розробників сайту', url: 'assets/komar/dev-img/photo_Komar.png', alt: 'image 2' },
    { name: 'Кривко Даніїл Олександрович', tasks: 'Захостив базу даних на https://aws.amazon.com/', url: 'assets/komar/dev-img/photo_Krivko.jpg', alt: 'image 3' },
    { name: 'Рябчич Віталій Володимирович', tasks: 'Закоментував валідацію для source лінків '
    + 'при створенні.', url: 'assets/komar/dev-img/photo_Ryabchich.jpg', alt: 'image 4' },
    { name: 'Панько Анастасія Павлівна', tasks: 'Додала на сторінці створення окрему форму по '
    + 'видаленню артиклів.', url: 'assets/komar/dev-img/photo_Panko.jpg', alt: 'image 5' },
    { name: 'Пустовіт Андрій Володимирович', tasks: 'Створив технічне завдання проекта', url: 'assets/komar/dev-img/photo_Pustovit.jpg', alt: 'image 6' },
    { name: 'Соколов Максим Сергійович', tasks: 'Розробив сайт IT вікіпедію. На сайті знаходиться '
    +'меню з трьома сторінками:головна,пошук,створення артиклів.', url: 'assets/komar/dev-img/photo_Sokolov.jpg', alt: 'image 7' },
    { name: 'Строганов Янош Романович', tasks: 'Змінив paddings для артікла. Змінив '
    + 'відступи з ліва та справа в артиклі для назви.' 
    + 'контенту. Можна зробити відступи динамічними.', url: 'assets/komar/dev-img/no-image.png', alt: 'image 8' },
  ];
}