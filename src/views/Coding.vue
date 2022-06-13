<template>
  <div class='content'>
    <div>
      <div class="focus columns is-mobile">
        <div 
          @keydown="(e) => onFocusChange(e, 'test')"
          v-bind:class="{current: this.focus === 'test'}"
          class="focus-item focus-test column" tabindex="1">
          <div>Test</div>
        </div>
        <div 
          @keydown="(e) => onFocusChange(e, 'code')" 
          v-bind:class="{current: this.focus === 'code'}"
          class="focus-item focus-code column" tabindex="2">
          Code
        </div>
        <div 
          @keydown="(e) => onFocusChange(e, 'refactoring')" 
          v-bind:class="{current: this.focus === 'refactoring'}"
          class="focus-item focus-refactoring column" tabindex="3">
          Clean
        </div>
      </div>
      <div v-if="this.focus === 'test'" >
        <div class="zen">
          <p>Focus Specification.</p>
        </div>
      </div>
      <div v-if="this.focus === 'code'" >
        <div class="zen">
          <p>Just Make It Pass.</p>
        </div>
      </div>
      <div v-if="this.focus === 'refactoring'" >
        <div class="zen refactoring">
          <p>Make It Clean. Save Knowdlege to Code.</p>
        </div>
        <article class="panel is-info">
          <p class="panel-heading">
            Code Issue
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input is-info" type="text" placeholder="Search">
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <a v-for="issue in issues" :key="issue" class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{issue.name}}
          </a>
        </article>
        <article class="panel is-info">
          <p class="panel-heading">
            Refactoring Idea
          </p>
          <div class="panel-block">
            <p class="control has-icons-left">
              <input class="input is-info" type="text" placeholder="Search">
              <span class="icon is-left">
                <i class="fas fa-search" aria-hidden="true"></i>
              </span>
            </p>
          </div>
          <a v-for="issue in issues" :key="issue" class="panel-block is-active">
            <span class="panel-icon">
              <i class="fas fa-book" aria-hidden="true"></i>
            </span>
            {{issue.name}}
          </a>
        </article>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  methods: {
    onFocusChange(event:any, focus:string) {
      if(event.code === 'Space') {
        this.focus = focus
      }
    }
  },
  data() {
    return {
      focus: '',
      issues: [
        {name: 'Long Method'},
        {name: 'Big Class'},
        {name: 'Temp Variable'},
      ],
      ideas: [
        {name: 'Extract Method'},
        {name: 'Inline Variable'},
        {name: 'Inline Method'},
      ],
      searchWord: "",
    };
  },
});
</script>

<style lang="scss">
.columns {
  padding: 0px;
  margin: 0px
}
.content {
  margin: 10px;
}
.focus-item {
  color: white;
  margin: 1px;
  font-size: 30px;
  font-weight: bold;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &.current {
    color: white;
  }
  &:focus {
    outline: 2px;
    outline-style: solid;
  }
  transition:background-color 0.2s ease-out 0.1s;
}
.focus-test {
  background: rgb(255, 200, 200);
  &.current {
    background: #e74c3c;
  }
  &:focus {
    outline-color: #e74c3c;
  }
}
.focus-code {
  background: rgb(200, 255, 200);
  &.current {
    background: #16a085;
  }
  &:focus {
    outline-color: #16a085;
  }
}
.focus-refactoring {
  background: rgb(216, 216, 255);
  &.current {
    background: #2980b9;
  }
  &:focus {
    outline-color: #2980b9;
  }
}
.zen {
  height: 400px;
  font-weight: bold;
  font-family: serif;
  font-size: 50px;
  color: grey;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.zen.refactoring {
  height: 100%;
  font-weight: bold;
  font-family: serif;
  font-size: 20px;
  color: grey;
}
</style>