# Generated by Django 4.2.16 on 2025-03-02 22:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Curriculum',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('file', models.FileField(upload_to='cv', verbose_name='Archivo')),
            ],
            options={
                'verbose_name': 'CV',
            },
        ),
    ]
