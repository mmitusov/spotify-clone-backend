//После создания файла экспортируем от сюда класс AppModule и помечаем его декоратором @Module, который параметром принимает объект
//Декоратор - это некая обертка которая добавляет на нашу функцию/класс новый функционал. А также наш @Module сообщает о том, что он модуль
//И после создания пустого модуля теперь мы можем эго экспортировать в main.ts как заготовку
//После создания базовой структуры, начнем подвязывать в наш модуль контроллеры нашего приложения
//Это нужно для того, чтобы сделать эти контроллеры работоспособными
//Для этого в поле controllers, создаем массив, где через запятую перечислим все контроллеры которые будут в нашем приложении

import { Module } from "@nestjs/common";
import { appController } from "./app.controller";

@Module({
    controllers: [appController]
})
export class AppModule {}