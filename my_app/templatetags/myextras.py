from django import template

register = template.Library()

@register.filter(name='cut')
def cut(value,arg):
    """
    bütün stringlerdeki arg karakterini keser
    :param value:
    :param arg:
    :return:
    """
    return value.replace(arg, '')


#register.filter('cut', cut) burasının üst kısımda yer alan @register.filter(name='cut') ifadesinin işlevi aynıdır.