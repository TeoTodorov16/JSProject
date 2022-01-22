# JSProject
Task - (byME Teodor Todorov)

Tech assignment - Network speed
Problem
Write a program that solves the most suitable (with highest non-zero speed) network station for a device at a given point (x, y).
This problem can be solved in 2-dimensional space. Network stations have reach and speed that depends on the distance to the station.
A network station’s speed can be calculated as follows:
     speed = (reach - device's distance from network station)^2
     if distance > reach, speed = 0
     
Print out the most suitable network station and the network speed from devices (x, y): (0, 0), (100, 100), (15, 10), (18, 18), (13, 13) and (25, 99)
Program should output the solution to these two cases:
● Best station found, output station location and speed
● No station within reach found, output error message
It can be in the form of:
“Best network station for point x,y is x,y with speed z” “No network station within reach for point x,y”

Requirements
Please make this project as complete as you think it should be to be maintainable in the long term by more than one maintainer.
A maintainable solution should have at minimum:
● Instructions on how to run the solution
● Code should be testable and unit tested
Optional
Provide the functionality and instructions for deploying the solution using any cloud provider. Nordcloud is a cloud company so we appreciate the display of cloud skills.
Submission
After you have finished the assignment:
1. Push the assignment to e.g. Github or Gitlab (make sure the repository is private!)
2. Use the following accounts to share it with us
Github: ncrecruitment
Gitlab: ncrecruitment
3. Send an email (with the link to your repository) to your Nordcloud contact and mention
that you have finished your assignment