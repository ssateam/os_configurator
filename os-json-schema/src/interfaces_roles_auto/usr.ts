import { IOSConfigRoleBasic } from "../interfaces_os-config";

/**
* User Center (usr)
* ```
* Обеспечивает логику обслуживания подключений пользователей к системе через API в контексте управления состояниями.
* ```
* https://dev01.oktell.ru/docs/r/develop/configuration/roles/usr.html
*/
export interface IOSConfigRoleUsr extends IOSConfigRoleBasic {
  /** 
   *```
   * Тип функциональной роли. Возможные значения: "usr". 
   *```
   */
  roletype: "usr"

  /** 
   *```
   * Алиас сетевого интерфейса сервера, на котором будет происходить внутреннее взаимодействие функциональных ролей между собой. 
   *```
   */
  iface: string

  /** 
   *```
   * Номер группы.
   * В рамках горизонтального масштабирования функциональная роль может быть разделена на несколько групп на сайте, в каждой из которых активен только один экземпляр, остальные зарезервированы.
   * Ответственность между группами разделяется по доменным множествам. Вместе все группы обслуживают полное доменное множество. Все функциональные роли одной группы должны иметь одинаковую ответственность.
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

  /** 
   *```
   * Список имен доменов, которые обслуживает данная группа.
   * Может быть указан любой домен любого уровня. Указание домена приводит к тому, что дерево его поддоменов будет обслуживаться на этой группе и не будет обслуживаться на других группах функциональной роли, исключая только те ветви, которые упомянуты в других группах.
   * В совокупности все группы функциональной роли на сайте обслуживают полное дерево доменов. 
   *```
   * default: empty
   */
  include_domains?: string[]

}