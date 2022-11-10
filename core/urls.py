from django.urls import path
from .views import indexView, blogView, certificacoesView, clientesView, comerciaisView, contatosView, industriaisView, logisticosView, missaoView, modeloView, nossa_equipeView, nossa_historiaView, noticia_blogView, projetosView, trabalhe_conoscoView, vagasView

urlpatterns = [
    path('', indexView.as_view(), name='index'),
    path('blog', blogView.as_view(), name='blog'),
    path('certificacoes', certificacoesView.as_view(), name='certificacoes'),
    path('clientes', clientesView.as_view(), name='clientes'),
    path('comerciais', comerciaisView.as_view(), name='comerciais'),
    path('contatos', contatosView.as_view(), name='contatos'),
    path('industriais', industriaisView.as_view(), name='industriais'),
    path('logisticos', logisticosView.as_view(), name='logisticos'),
    path('missao', missaoView.as_view(), name='missao'),
    path('modelo', modeloView.as_view(), name='modelo'),
    path('nossa_equipe', nossa_equipeView.as_view(), name='nossa_equipe'),
    path('nossa_historia', nossa_historiaView.as_view(), name='nossa_historia'),
    path('noticia_blog', noticia_blogView.as_view(), name='noticia_blog'),
    path('projetos', projetosView.as_view(), name='projetos'),
    path('trabalhe_conosco', trabalhe_conoscoView.as_view(), name='trabalhe_conosco'),
    path('vagas', vagasView.as_view(), name='vagas'),
]