import { IOSConfigRoleBasic } from "../interfaces_os-config";

/**
* DB Procedure Controller (dbproc)
* ```
* Процессор выполняющий по расписанию запросы к различным БД (системных – потоковой cdr, журнальной jrnl, отчетной repg, сущностной dc и сторонних – через указание подключения). Может использоваться для подготовки данных для системы отчетности.
* ```
* https://dev01.oktell.ru/docs/r/develop/configuration/roles/dbproc.html
*/
export interface IOSConfigRoleDbproc extends IOSConfigRoleBasic {
  /** 
   *```
   * Тип функциональной роли. Возможные значения: "dbproc". 
   *```
   */
  roletype: "dbproc"

  /** 
   *```
   * Алиас сетевого интерфейса сервера, на котором будет происходить внутреннее взаимодействие функциональных ролей между собой. 
   *```
   */
  iface: string

  /** 
   *```
   * Идентификатор функциональной роли.
   * Уникален для всей системы, независимо от сайта или сервера. Не подлежит изменению.
   * Целое число от 1 до 9999. 
   *```
   *  @TJS-minimum 1
   *  @TJS-maximum 9999
   *  @TJS-uniqueItems
   *  @TJS-integer
   */
  roleid: number

  /** 
   *```
   * Признак выделения функциональной роли в отдельную ноду. 
   *```
   */
  separate: boolean

  /** 
   *```
   * Номер группы.
   * Горизонтальное масштабирование внутри сайта не поддерживается. Все экземпляры функциональной роли на сайте должны иметь одинаковое значение.
   * Целое число от 1 до 9999999. 
   *```
   *  @TJS-integer
   *  @TJS-minimum 1
   *  @TJS-maximum 9999999
   */
  group: number

  /** 
   *```
   * Порядок экземпляра функциональной роли в рамках группы.
   * Определяет в каком порядке будет происходить перетекание в режиме Active-Passive. 
   *```
   */
  order: number

}