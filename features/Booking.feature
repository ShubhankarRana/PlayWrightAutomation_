Feature: Hotel Booking

@login
  Scenario: Login to booking.com
    Given Visit booking.com homepage
    When login using "username" and "password"
    Then landed on dashboard

@booking
  Scenario: Hotel Booking
    Given on homepage search for available hotels in "New York" for the dates "2023-07-01" to "2023-07-05"
    When I filter the search results by "4 stars" and "Free Wi-Fi"
    And I sort the search results by "Price: Low to High"
    Then I select the first available hotel and fill the details

    Examples:
    | shubhankarvdi@gmail.com   | Programmer#1 |  