# Generated by Django 5.0.4 on 2024-06-04 09:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('roll_number', models.CharField(max_length=100)),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('name', models.CharField(max_length=100)),
                ('department', models.CharField(max_length=100)),
                ('subject', models.CharField(max_length=100)),
                ('remarks', models.CharField(max_length=100)),
                ('application_document', models.CharField(max_length=100)),
                ('state', models.IntegerField(choices=[(0, 'inward'), (1, 'outward')], default=0)),
            ],
        ),
    ]
