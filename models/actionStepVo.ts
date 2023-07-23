/**
 * action step 데이터 모델 정의
 */

export class ActionStepVo {
  /** action-step 고유 식별 값 */
  public id!: number

  /** action-step type ( 01: Physical 02: Mental 03: Intellectual ) */
  public type!: string

  /** 과제 항목 이름 */
  public taskName?: string

  /** action 실행 날짜  */
  public actionDate?: string

  /** 등록 날짜  */
  public regDate?: string

  /** 추가 메모 */
  public memo?: string
}
