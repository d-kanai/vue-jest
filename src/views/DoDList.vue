<template>
  <div>
    <section class="section">
      <h3 class="subtitle">DoDList</h3>
      <table class="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="dod in dodList.items" :key="dod">
            <td>{{dod.id}}</td>
            <td>{{dod.name}}</td>
          </tr>
        </tbody>
      </table>
      <form @submit="onSubmit">
        <TextField v-model="name" label="name" :error="errors.name"/>
        <button class="button is-small is-responsive" type="submit">Create DoD</button>
      </form>
    </section>
    <section id="dodRecord" class="section">
      <h3 class="subtitle">DoD Record</h3>
      <p v-for="dodRecord in dodRecordList" :key="dodRecord">{{ dodRecord.date }}, {{ dodRecord.value }}, {{ dodRecord.comment }}</p>
      <form id="dodRecordForm" @submit="onDoDRecordSubmit">
        <div class="field">
          <div class="select">
            <select v-model="dodId" id="select-dod">
              <option value=1>Long Method</option>
            </select>
          </div>
        </div>
        <TextField v-model="date" label="date" :error="errors.date"/>
        <TextField v-model="value" label="value" :error="errors.value"/>
        <TextField v-model="comment" label="comment" :error="errors.comment"/>
        <button class="button is-small is-responsive" type="submit">Create DoD Record</button>
      </form>
    </section>
  </div>
</template>


<script>
//@IMPROVE use typescript

import TextField from "@/components/TextField";
import {createDoD, createDoDRecord} from "@/apis/DoDApi"
import {useDoDForm, useDoDRecordForm} from "@/hooks/useDoDForm"
import {useDoDList} from "@/hooks/useDoDList"
import {ref} from "vue";

export default {
  name: "App",
  components: {TextField},
  setup() {
    const dodList = useDoDList()
    const dodRecordList = ref([{}]);
    const {DoDRecordHandleSubmit, DoDRecordErrors, date, value, comment, dodId} = useDoDRecordForm()
    // @IMPROVE: move form concern to hook
    const {handleSubmit, errors, name} = useDoDForm()
    return {
      date: date,
      value: value,
      comment: comment,
      dodId: dodId,
      onDoDRecordSubmit: DoDRecordHandleSubmit((formData) => {
        createDoDRecord({...formData, dodId: parseInt(formData.dodId)});
        dodRecordList.value.push({...formData});
      }),
      DoDRecordErrors: DoDRecordErrors,
      dodRecordList,
      dodList,
      name: name,
      errors: errors,
      onSubmit: handleSubmit((formData) => {
        createDoD(formData)
        dodList.value.items.push({name: formData.name})
      })
    }
  },
};
</script>

<style>
</style>
