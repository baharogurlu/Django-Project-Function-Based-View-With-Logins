from django.contrib.auth import authenticate, login, logout
from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.shortcuts import render
from my_app.models import Topic, AccessRecord, WebPage
from . import forms
from my_app.forms import NewTopicForm, NewWebPages, UserProfileInfoForm, UserForm
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from  django.http import HttpResponseRedirect, HttpResponse

def index(request):

    webpage_list = WebPage.objects.order_by('topicId')
    topic_list = Topic.objects.order_by('topic_name')
    date_dict = {'topic_list': topic_list, 'webpage_list': webpage_list}

    return render(request, 'my_app/index.html', context=date_dict)


@login_required
def special(request):
    return HttpResponse("You logged in , Nice!")



@login_required
def user_logout(request):
    logout(request)
    return HttpResponseRedirect(reverse('index'))




def help(request):
    my_dict = {'help': 'HELP PAGE Açıldı!'}
    return render(request, 'my_app/help.html', context=my_dict)



def listTopic(request):
    form = NewTopicForm

    if request.method == 'POST':
        form = NewTopicForm(request.POST)

        if form.is_valid():
            form.save(commit=True)
            return index(request)
        else:
            print('Error form invalid!')
    return render(request, 'my_app/listTopic.html', {'form': form})


def listWebPage(request):
    form = NewWebPages
    if request.method == 'POST':
        form = NewWebPages(request.POST)
        form.save(commit=True)
        return index(request)
    else:
        print('Error form valid')
    return render(request, 'my_app/listWebPage.html', {'form': form})


def form_name_views(request):
    form = forms.FormName

    if request.method == 'POST':
        form = forms.FormName(request.POST)

        if form.is_valid():
            #do something
            print("VALIDATION SUCCESS")
            print("NAME: "+form.cleaned_data['name'])
            print("Email: " + form.cleaned_data['email'])
            print("Text: " + form.cleaned_data['text'])

    return render(request, 'my_app/form_page.html', {'form': form})

def filterExp(request):
    webpage_list = WebPage.objects.order_by('topicId')
    dict = {'webpage_list': webpage_list}
    return render(request, 'my_app/listFilter.html', context=dict)


#REGISTRATION

def register(request):
    registered=False

    if request.method == 'POST':
        user_form = UserForm(data=request.POST)
        profile_form =UserProfileInfoForm(data=request.POST)

        if user_form.is_valid() and profile_form.is_valid():
            user = user_form.save()
            user.set_password(user.password)
            user.save()


            profile = profile_form.save(commit=False)
            profile.user = user

            if 'profile_pic' in request.FILES:
                profile.profile_pic = request.FILES['profile_pic']

            profile.save()
            registered = True

        else:
            print(user_form.errors, profile_form.errors)
    else:
        user_form = UserForm()
        profile_form = UserProfileInfoForm()

    return render(request, 'my_app/registration.html', {'user_form': user_form, 'profile_form': profile_form, 'registered': registered})




#LOGIN

def user_login(request):

    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(username=username, password=password)

        if user:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('index'))
            else:
                return HttpResponse('Account Not Active')
        else:
            print("Login Falied!")
            print("username:{}, password:{}".format(username, password))
            return HttpResponse("Invalid request for Login!")
    else:
        return render(request, 'my_app/user_login.html', {})
