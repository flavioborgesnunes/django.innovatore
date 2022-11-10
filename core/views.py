from django.views.generic import TemplateView
# from django.views.generic.edit import FormView
from django.shortcuts import render
from django.core.mail import send_mail



from .forms import ContatoForm
# from django.urls import reverse_lazy
from django.contrib import messages


def contatos(request):
    form = ContatoForm(request.POST or None)
    
    if  str(request.method) == 'POST':
        if form.is_valid():
            form.send_mail()

            messages.success(request,'E-mail enviado com sucesso')
            form = ContatoForm
        else:
            messages.error(request, 'Erro ao enviar E-mail')
            

    context = {
        'form': form
    }
    return render(request, 'contatos.html', context)


class indexView(TemplateView):
    template_name = 'index.html'
    
class blogView(TemplateView):
    template_name = 'blog.html'

class certificacoesView(TemplateView):
    template_name = 'certificacoes.html'

class clientesView(TemplateView):
    template_name = 'clientes.html'

class comerciaisView(TemplateView):
    template_name = 'comerciais.html'



# class contatosView(FormView):
#     template_name = 'contatos'
#     form_class: ContatoForm 
#     success_url: reverse_lazy('contatos')

#     def get_context_data(self, **kwargs):
#         return super(contatosView,self).get_context_data(**kwargs)

#     def form_valid(self, form, *args, **kwargs):
#         form.send_mail()
#         messages.success(self.request, 'E-mail enviado com sucesso!')
#         return super(contatosView, self).form_valid(form, *args, **kwargs)

#     def form_invalid(self, form, *args, **kwargs):
#         messages.error(self.request, 'Erro ao enviar mendagem!')
#         return super(contatosView, self).form_invalid(form, *args, **kwargs)



class industriaisView(TemplateView):
    template_name = 'industriais.html'

class logisticosView(TemplateView):
    template_name = 'logisticos.html'

class missaoView(TemplateView):
    template_name = 'missao.html'

class modeloView(TemplateView):
    template_name = 'modelo.html'

class nossa_equipeView(TemplateView):
    template_name = 'nossa_equipe.html'

class nossa_historiaView(TemplateView):
    template_name = 'nossa_historia.html'

class noticia_blogView(TemplateView):
    template_name = 'noticia_blog.html'

class projetosView(TemplateView):
    template_name = 'projetos.html'

class trabalhe_conoscoView(TemplateView):
    template_name = 'trabalhe_conosco.html'

class vagasView(TemplateView):
    template_name = 'vagas.html'

