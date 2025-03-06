/** 
 * Composition: 합성
 *  - 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것
 * 
 * 방법
 *  1. Containment
 *      - 하위 컴포넌트를 포함하는 형태의 합성 방법
 *      - Box형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없음.
 *      - prop.children 속성 사용(createElemnet) 
 *      ** angular 에서도 children 개념 있었음. ng-content 을 이용해서 table을 커스텀한 듯.
 * 
 *  2.  Specialization: 전문화, 특수화
 *      - 범용적인 개념을 구별되게 구체화하는 것.
 *  
 * 
 * Inheritance: 상속
 *  - 다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것
 *  ** angular에서는 이 방법을 주로 썼던 거 같으나 react에서는 containment를 많이 쓰는 것 같다는 설명.
 */
