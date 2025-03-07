/**
 * Context
 *  - 여러 개의 Component들이 자주 필요로 하는 데이터 
 *    일일히 props 로 전달할 필요없이 데이터를 필요로 하는 곳에 곧바로 전달 가능
 *  - ex) ThemeContext = React.createContext('');
 *        <ThemeContext.Provider value="dark"></ThemeContext.Provider>
 *        <ThemeContext.Consumer>{value => }</ThemeContext.Consumer>
 * 
 *  ** angular에서 공통적인 데이터들을
 *  Service.ts 에서 미리 받아서 user에 값을 채워놓고, 그걸 사용하는 듯한 느낌과 같다. 
 *  매번 user의 값을 넘기는 것이 아닌 이미 최상위에 선언되어있는 user를 이용했던 거 같은 
 *      - 사실 완전히 이해되지는 않음. 
 * 
 *  주의할 점 
 *  - Component 와 Context가 연동되면 재사용성이 떨어짐.
 * 
 * Class component
 *  <ThemeContext.Provider value="dark"></ThemeContext.Provider>
 *  - Provider 컴포넌트가 재렌더링될 때마다 모든 하위 consumer 컴포넌트가 재렌더링 됨.
 *   => value를 직접 넣는 것이 아니라 state를 사용
 * 
 *  <ThemeContext.Consumer></ThemeContext.Consumer>
 *  - Provider 컴포넌트를 구독하는 
 * 
 *  Hook
 *  useContext() => context 객체를 넣어줘야한다?
 */