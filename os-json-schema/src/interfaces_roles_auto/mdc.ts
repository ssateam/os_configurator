import { IOSConfigRoleBasic } from "../interfaces_os-config";

/**
* Master Domain Center (mdc)
* ```
* Хранилище сущностей домена.
* Предоставляет другим функциональным ролям внутри сайта доступ к данным для организации процессов. Некоторые данные подлежат предварительному расчету внутри функциональной роли.
* Имеет прямой доступ к реляционными БД всех доменов вне зависимости от того, на каких сайтах они обслуживаются. При запуске загружает в кеш данные по доменам из соответствующих БД.
* ```
* https://dev01.oktell.ru/docs/r/develop/configuration/roles/mdc.html
*/
export interface IOSConfigRoleMdc extends IOSConfigRoleBasic {
  /** 
   *```
   * Тип функциональной роли. Возможные значения: "mdc". 
   *```
   */
  roletype: "mdc"

  /** 
   *```
   * Алиас сетевого интерфейса сервера, на котором будет происходить внутреннее взаимодействие функциональных ролей между собой. 
   *```
   */
  iface: string

  /** 
   *```
   * Строки подключения к ферме серверов PostgreSQL сущностных БД доменов.
   * Формат строки подключения: "alias://pgdb_strings/<ALIAS_NAME>", где <ALIAS_NAME> – конкретный алиас конфигурации из раздела pgdb_strings.
   * Перечисление в списке нескольких строк подключения обеспечивает резервный доступ к ферме серверов БД – если подключение через первую строку не удается, производится подключение через вторую и т.д. 
   *```
   */
  dbconnstrings: string[]

  /** 
   *```
   * Номер группы.
   * В рамках горизонтального масштабирования функциональная роль может быть разделена на несколько групп на сайте, в каждой из которых активен только один экземпляр, а остальные зарезервированы.
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