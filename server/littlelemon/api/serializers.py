from rest_framework import serializers
from .models import Booking
from datetime import date
# Please read the README file for guidance
class BookingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Booking
        fields = ['id', 'first_name','booking_date', 'booking_time', 'number_of_guests', 'occasion']

    def validate_booking_date(self, value):
        if value < date.today():
            raise serializers.ValidationError("Booking date cannot be in the past")
        return value
    
    def validate_number_of_guests(self, value):
        if value < 1:
            raise serializers.ValidationError("Number of guests must be at least 1")
        return value