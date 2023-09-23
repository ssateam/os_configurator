import { IOSConfigRoleBasic } from "../interfaces_os-config";

/**
* Back to back UserAgent (b2b)
* ```
* Функциональная роль организующая коммутацию между SIP устройствами, путем создания двусторонних диалогов.
* Производит маршрутизацию и вызов соответствующих устройств с организацией медиа-потока между ними посредством функциональных ролей mgc и mg.
* ```
* https://dev01.oktell.ru/docs/r/develop/configuration/roles/b2b.html
*/
export interface IOSConfigRoleB2b extends IOSConfigRoleBasic {
  /** 
   *```
   * Тип функциональной роли. Возможные значения: "b2b". 
   *```
   */
  roletype: "b2b"

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
   * Локальный порт UDP для SIP. Этот же порт одновременно обрабатывает и TCP.
   * Например: 5090. 
   *```
   *  @TJS-integer
   */
  udp: number

  /** 
   *```
   * Локальный порт TCP для SIP. Если указано значение, отличное от UDP, то будет поднят дополнительно.
   * Например: 5090. 
   *```
   *  @TJS-integer
   */
  tcp: number

  /** 
   *```
   * Выключатель логирования SIP-протокола в лог trn. 
   *```
   * default: true
   */
  trn?: boolean

  /** 
   *```
   * По умолчанию при инициации звонков на адреса, подключенные по TLS, отправляется SDP-offer для нешифрованного медиа потока (rtp). С помощью параметра можно для TLS адресов включить режим инициации отправки SDP-offerа с шифрованным медиа-потоком. 
   *```
   * default: false
   */
  use_srtp?: boolean

  /** 
   *```
   * Выключатель режима отправки набора кодеков в ответах на INVITE.
   * false – в ответе отправляется не более одного кодека из полученных в Offer SDP.
   * true – в ответе может быть отправлено подмножество кодеков из списка полученных в Offer SDP. 
   *```
   * default: true
   */
  allow_ac_set?: boolean

  /** 
   *```
   * Выключатель режима отправки re-INVITE инициатору звонка сразу после установки диалога (получен подтверждающий SIP-запрос ACK).
   * Может использоваться для обновления данных на дисплее в случае, если устройства не обрабатывают SIP-заголовок Remote-Party-Id.
   * Также может применяться для выравнивания кодеков с целью увеличить вероятность прямой передачи трафика без транскодинга. 
   *```
   * default: false
   */
  send_reinvite_on_ack?: boolean

  /** 
   *```
   * Выключатель режима проверки устройств с помощью отправки SIP-запроса OPTIONS при получении запроса REGISTER, превышающего лимит по лицензии.
   * false – отказывать в регистрации;
   * true – проверять доступность зарегистрированных устройств, и в случае обнаружения недоступности автоматически заменять регистрацию. 
   *```
   * default: false
   */
  check_by_options_on_limit?: boolean

  /** 
   *```
   * Список применяемых аудио кодеков.
   * В качестве значения список, содержащий имена кодеков в формате "Name/Freq".
   * Поддерживаются: PCMU/8000, GSM/8000, PCMA/8000, G722/8000, CN/8000, G729/8000, speex/8000, speex/16000, speex/32000, telephone-event/8000, G726-16/8000, G726-24/8000, G726-32/8000, G726-40/8000, iLBC/8000, opus/48000/2. 
   *```
   * default: ["PCMA/8000", "PCMU/8000", "G729/8000", "telephone-event/8000"]
   */
  payloads_audio_offer?: string[]

  /** 
   *```
   * Список используемых для инициации звонка имен видеокодеков case-sensitive.
   * Поддерживаются: H263/90000, H263-1998/90000, H264/90000, VP8/90000, VP9/90000. 
   *```
   * default: empty
   */
  payloads_video_offer?: string[]

  /** 
   *```
   * Использовать транскодинг видео.
   * false – все видео-кодеки из SDP INVITE-запроса, полученного от инициатора, транслируются без изменений в SDP INVITE-запросов на вызываемые устройства. В этом случае система не применяет ни свои знания о кодеках, ни транскодинг, икодек неизвестен системе, то прямая трансляция тем не менее остается возможной.
   * true – все видео-кодеки приводятся в соответствии с известными системе видео-кодеками, система предлагает вызываемой стороне все известные ей кодеки (с фильтром из payloads_video_offer), и при несовпадении выбранных устройствами кодеков осуществляется транскодинг на видео-стриме. 
   *```
   * default: false
   */
  use_video_transcoding?: boolean

  /** 
   *```
   * Выключатель записи диалогов с IVR.
   * При указании false медиа-трафик звонков в IVR, включая очереди, принудительно не записывается, вне зависимости от установок правил записи. 
   *```
   * default: false
   */
  record_ivr?: boolean

  /** 
   *```
   * Выключатель записи диалогов с конференциями.
   * При указании false медиа-трафик звонков в конференц-комнаты принудительно не записывается, вне зависимости от установок правил записи. 
   *```
   * default: false
   */
  record_conf?: boolean

}