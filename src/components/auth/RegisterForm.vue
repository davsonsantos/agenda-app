<template>
    <v-alert v-if="feedbackMessage" color="error" class="mb-3">{{ feedbackMessage }}</v-alert>
    <v-form @submit.prevent="submit">
        <v-row class="d-flex mb-3">
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Nome</v-label>
                <v-text-field v-model="firstName" :error-messages="errors.first_name" variant="outlined" color="primary" />
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Sobrenome</v-label>
                <v-text-field v-model="lastName" :error-messages="errors.last_name" variant="outlined" color="primary" />
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">E-mail</v-label>
                <v-text-field v-model="email" :error-messages="errors.email" variant="outlined" type="email"
                    color="primary" />
            </v-col>
            <v-col cols="12">
                <v-label class="font-weight-bold mb-1">Senha</v-label>
                <v-text-field v-model="password" :error-messages="errors.password" variant="outlined" type="password"
                    color="primary" />
            </v-col>
            <v-col cols="12">
                <v-btn type="submit" color="primary" size="large" block flat :loading="isSubmitting">Cadastrar</v-btn>
            </v-col>
        </v-row>
    </v-form>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import { object, string } from 'yup';
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const schema = object({
    first_name: string().required("Nome é obrigatório").label("Nome"),
    last_name: string().required("Sobrenome é obrigatório").label("Sobrenome"),
    email: string().email().required("E-mail é obrigatório").label("E-mail"),
    password: string().required("Senha é obrigatório").min(8, (data) => `Senha deve ter pelo menos ${data.min} caracteres`)
        .matches(
            /^(?=.*[a-zA-Z])(?=.*[0-9])/,
            'Pelo menos uma letra e um número'
        )
        .label("Senha"),
})
const { handleSubmit, errors, isSubmitting } = useForm({
    validationSchema: schema,
    initialValues: {
        first_name: 'Jon',
        last_name: 'Lenon',
        email: 'jon@lenon.com',
        password: 'password1'
    }
})
const router = useRouter()
const feedbackMessage = ref("");
const submit = handleSubmit(async (values) => {
    const authStore = useAuthStore()
    await authStore.register(values.first_name, values.last_name, values.email, values.password)
        .then(async () => {
            await authStore.login(values.email, values.password)
            router.push({ name: 'dashboard' })
        })
        .catch((e) => {
            feedbackMessage.value = e.message
        });

});

const { value: firstName } = useField('first_name')
const { value: lastName } = useField('last_name')
const { value: email } = useField('email')
const { value: password } = useField('password')
</script>