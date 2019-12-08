<template>
  <div>
    <b-steps
      v-model="position"
      :has-navigation="false"
      size="is-large"
    >
      <b-step-item
        v-for="(question, index) in questions"
        :key="index"
        :icon="question.icon"
      >
        <QuestionSelect
          :text="question.text"
          :options="question.options"
          @click="goNext()"
        />
      </b-step-item>
    </b-steps>
  </div>
</template>

<script>
import QuestionSelect from '../../components/molecules/QuestionSelect.vue';

export default {
  name: 'FormContainer',
  components: {
    QuestionSelect,
  },
  data: () => ({
    position: 0,
    questions: [
      {
        text: 'Porque você está viajando para Brasília?',
        icon: 'airplane-takeoff',
        options: [
          { label: 'Viajando por lazer', value: 'lazer' },
          { label: 'Viajando por trabalho', value: 'trabalho' },
          { label: 'Viajando de férias', value: 'ferias' },
        ],
      },
      {
        text: 'Qual tipo de comida que você gosta?',
        icon: 'food-apple',
        options: [
          { label: 'Culinária Italiana', value: 'italiana' },
          { label: 'Culinária Japonesa', value: 'japonesa' },
          { label: 'Culinária Mineira', value: 'mineira' },
        ],
      },
      {
        text: 'Em um sábado a noite, aonde você gosta de ir?',
        icon: 'music',
        options: [
          { label: 'Balle de Dança', value: 'bale' },
          { label: 'Bares', value: 'bar' },
          { label: 'Restaurantes', value: 'restaurante' },
          { label: 'Ópera', value: 'opera' },
        ],
      },
      {
        text: 'Qual a melhor forma de falar com você?',
        icon: 'forum',
        options: [
          { label: 'Email', value: 'email' },
          { label: 'Telefone', value: 'telefone' },
          { label: 'WhatsApp', value: 'whatsapp' },
          { label: 'SMS', value: 'sms' },
        ],
      },
    ],
  }),
  methods: {
    goNext() {
      const { position } = this;
      if (position >= this.questions.length - 1) this.$router.push('/page-5');
      else this.position = this.position + 1;
    },
  },
};
</script>
