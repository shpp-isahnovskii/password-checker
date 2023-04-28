<script setup>
import { RULE, REGEX_RULE } from "@/domain/password/rules";
import { StrengthOptionLabel } from "@/domain/password/strength-options";
import { RuleNameLabels } from "@/domain/password/rules-namings";
import { ref, computed, watch } from "vue";

const rules = Object.values(RULE);

const password = ref("");
const passwordCheckList = ref({});

const updatePasswordCheckList = () => {
  Object.keys(REGEX_RULE).forEach((key) => {
    passwordCheckList.value[key] = !!password.value.match(`${REGEX_RULE[key]}`);
  });
};

const passwordStrength = computed(() => {
  return Object.values(passwordCheckList.value).reduce((acc, status) => {
    return acc + status; // status is a boolean, coerced to 0 or 1
  }, 0);
});

watch(password, () => {
  updatePasswordCheckList();
});
</script>

<template>
  <fieldset class="fieldset-wrapper">
    <legend class="fieldset__legend">Password checker</legend>
    <input
      class="password__input"
      type="text"
      data-test="password-field"
      v-model="password"
    />
    <ul class="rules-list">
      <li
        v-for="rule in rules"
        :key="rule"
        :data-test-rule-indicator="rule"
        :class="[
          'password-hint__rule',
          'password-hint__rule--' + (passwordCheckList[rule] ? 'pass' : 'fail'),
        ]"
      >
        {{ RuleNameLabels[rule] }}
      </li>
    </ul>
    <span data-test="validation-summary">
      {{
        passwordStrength >= 5
          ? StrengthOptionLabel.strong
          : StrengthOptionLabel.weak
      }}
    </span>
  </fieldset>
</template>

<style scoped>
.fieldset-wrapper {
  margin: 5rem auto;
  font-size: 16px;
  max-width: 26rem;
  border-radius: 0.5rem;
  padding: 1.75rem 1.5rem 0.75rem 1.5rem;
  border-color: var(--black);
}

.fieldset__legend {
  font-size: 1.1rem;
}

.password__input {
  box-sizing: border-box;
  border: 2px solid var(--black);
  border-radius: 0.2rem;
  padding: 0.5rem;
  width: 100%;
}
.password__input:focus-visible {
  outline: none;
}
.password-hint__rule--pass {
  color: var(--green);
  text-decoration: line-through;
}

.rules-list {
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
  margin-bottom: 2rem;
}
</style>
