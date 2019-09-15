# make show question

## task

### make question

* add question vue at `./components`
    * add method `fetchQuestion()`, use axios
    * add return button back to list page
* add router at `./router.js`
* add detail button in list page

### add detail button on menu

```
<router-link class="btn btn-success" :to="'/question/'+question.id">Detail<router-link>
```

## answer
check standard answer by checking `./answer_project`