# TemplateDrivenExam

## 템플릿 기반 폼의 중심 디렉티브

### NgForm 디렉티브

> 템플릿 기반 폼 전체를 관리하는 디렉티브이다.  
> NgForm 폼 요소의 자식 요소 중에서 NgModel 디렉티브가 적용된 요소를 탐색하여 FormGroup에 추가한다.

```html
<form novalidate></form>
```

### NgModel 유효성 검사

```html
<input
  type="text"
  name="title"
  ngModel
  #title="ngModel"
  pattern="[a-zA-Z0-9]{4,10}"
  required
/>

<!-- 유효성 검증에 실패한 경우, 에러객체 반환하며, 성공할 경우 null 반환한다 -->
<p>errors: {{ title.errors | json }}</p>
<!-- 유효성 검증에 성공하면 true -->
<p>valid: {{ title.valid }}</p>
<!-- 유효성 검증에 실패하면 true -->
<p>invalid: {{ title.invalid }}</p>
<!-- 값을 한번도 입력하지 않은 상태라면 true -->
<p>pristine: {{ title.pristine }}</p>
<!-- 값을 한번 이상 입력한 상태이면 true -->
<p>dirty: {{ title.dirty }}</p>
<!-- focus in 이 한번 이상 발생한 상태라면 true -->
<p>touched: {{ title.touched }}</p>
<!-- focus in 이 한번도 발생하지 않는 상태라면 true -->
<p>untouched: {{ title.untouched }}</p>
```
