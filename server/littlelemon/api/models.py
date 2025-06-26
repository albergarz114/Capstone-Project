from django.db import models
# Please read the README file for guidance
# Create your models here.
class Booking(models.Model):
   
    OCCASION_CHOICES = [
        ('anniversary', 'Anniversary'),
        ('birthday', 'Birthday'),
    ]
    first_name = models.CharField(max_length=255, default='Guest')
    booking_date = models.DateField()
    booking_time = models.TimeField()
    number_of_guests = models.PositiveIntegerField(default=1)
    occasion = models.CharField(
        max_length=20,
        choices=OCCASION_CHOICES,
        default='birthday'
    )

    def __str__(self):
        return f"Booking for {self.first_name} and {self.number_of_guests} guests on {self.booking_date} at {self.booking_time} ({self.occasion})"
