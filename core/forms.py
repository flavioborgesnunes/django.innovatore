from django import forms
from django.core.mail.message import EmailMessage


class ContatoForm(forms.Form):
    nome = forms.CharField(label='Nome', max_length=100)
    email = forms.EmailField(label='E-mail', max_length=100)
    telefone = forms.IntegerField(label='Telefone')
    assunto = forms.CharField(label='Assunto', max_length=100)
    mensagem = forms.CharField(label='Mensagem', widget=forms.Textarea(attrs={"rows":5, "cols":10}))

    def send_mail(self):
        nome = self.cleaned_data['nome']
        email = self.cleaned_data['email']
        telefone = self.cleaned_data['telefone']
        assunto = self.cleaned_data['assunto']
        mensagem = self.cleaned_data['mensagem']

        conteudo = f'Nome: {nome}\nE-mail: {email}\nTelefone: {telefone}\nAssunto: {assunto}\nMensagem: {mensagem}'
        mail = EmailMessage(
            subject='Email enviado pelo sistema django',
            body=conteudo,
            from_email='seuContato@innovatore.com.br',
            to= ['seuContato@innovatore.com.br',],
            headers={'Reply-to': email}
        )
        mail.send()