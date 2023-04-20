/**
 * This program will attempt to record a user's name and 1RM into a workout log,
 * as well as output the day's workouts depending on the weekday and how far into
 * the month the user is.
 *
 * @author  Jacob Davis
 * @version 1.1
 */

import java.io.File;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.io.IOException;
import java.util.Scanner;
import java.io.FileWriter;
import java.text.DecimalFormat;

public class Workout {

    static Scanner input = new Scanner(System.in);

    public static void main (String[] args) {
        introduction();
    }

    private static void introduction() {
        String userName = "";

        System.out.println("\nWelcome to the world's okayest workout program!\n");
        System.out.println("What is your name?");
        userName = input.nextLine();

        if (checkForExistingFile(userName) == true) {
            System.out.println("\nWelcome Back!");
            existingUser(userName);
        } else {
            System.out.printf("\nHi there %s! We'll save your information in a log file for future use!%n", userName);
            newUser(userName);
        }

    }

    private static void newUser(String userName) {
        Lifter lifter = new Lifter(userName);

        System.out.println("For now, let's record your one rep maxes for the four big lifts.\n");
        recordNewMaxes(lifter);
    }

    private static void recordNewMaxes(Lifter lifter) {
        int oneRepMax = 0;
        String pathName = lifter.getName() + "-workoutData.txt";

        System.out.println("What is your 1RM for Bench Presses?");
        oneRepMax = input.nextInt();
        lifter.setBench(oneRepMax);

        System.out.println("What is your 1RM for Squats?");
        oneRepMax = input.nextInt();
        lifter.setSquat(oneRepMax);

        System.out.println("What is your 1RM for Overhead Presses?");
        oneRepMax = input.nextInt();
        lifter.setPress(oneRepMax);

        System.out.println("What is your 1RM for Deadlifts?");
        oneRepMax = input.nextInt();
        lifter.setDead(oneRepMax);

        System.out.println("\nNice! We'll get these logged for you!\n");

        writeToFile(lifter, pathName);
        existingUser(lifter.getName());
    }

    private static void existingUser(String userName) {
        String pathName = userName + "-workoutData.txt";
        Lifter lifter = new Lifter(userName);
        int userChoice = 0;
        boolean userContinue = true;
        fillInLiftData(pathName, lifter);

        while (userContinue) {
            System.out.println("Would you like to: ");
            System.out.println("(1) Get your current lifts");
            System.out.println("(2) See your 1 Rep Maxes");
            System.out.println("(3) Calculate a new 1 Rep Max");
            System.out.println("(4) Manually update your 1 Rep Maxes");
            System.out.println("(5) Automatically update your 1 Rep Maxes");
            System.out.println("(0) Exit the program");
            userChoice = input.nextInt();

            switch (userChoice) {
            case 3:
                System.out.println("\nTime to crunch some numbers!");
                calculateOneRepMax();
                break;
            case 4:
                System.out.println("\nLet's do it!.");
                recordNewMaxes(lifter);
                writeToFile(lifter, pathName);
                break;
            case 1:
                System.out.println("\nTime to fuck shit up.");
                generateLiftCharts(pathName, lifter);
                break;
            case 2:
                System.out.println("\nNo problem!");
                System.out.println(lifter.toString());
                break;
            case 0:
                userContinue = false;
                System.out.println("\nThanks for visiting the fortress of SWOLitude!\n");
                System.exit(1);
            case 5:
                System.out.println("\nYou got it! ");
                autoUpdateMaxes(lifter);
                writeToFile(lifter, pathName);
                break;
            default:
                System.out.println("Oops - your input wasn't expected, give it another shot.");
            }
        }
    }

    private static void  autoUpdateMaxes(Lifter lifter) {
        System.out.println("\nPREVIOUS MAXES:");
        System.out.println(lifter.toString());

        lifter.setBench(lifter.getBench() + 5);
        lifter.setSquat(lifter.getSquat() + 10);
        lifter.setPress(lifter.getPress() + 5);
        lifter.setDead(lifter.getDead() + 10);

        System.out.println("\nNEW MAXES:");
        System.out.println(lifter.toString());

    }

    private static void calculateOneRepMax() {
        int weight = 0;
        int reps = 0;
        // int userInput = 0;
        double oneRM = 0;
        DecimalFormat df = new DecimalFormat("#.##");

        System.out.println("First, how much weight did you lift? (Ex: 150)");
        weight = input.nextInt();

        System.out.println("\nNice, now how many times did you lift this? (Ex: 4)");
        reps = input.nextInt();

        oneRM = weight / (1.0278 - 0.0278 * reps);
        System.out.println("\nThose are some solid numbers my dude. The calculated 1 Rep Max is: " + df.format(oneRM));
        System.out.println("(Just be sure to round that up to the next nearest multiple of 5).\n");
    }

    private static void generateLiftCharts(String path, Lifter lifter) {
        int cycle = 0;

        System.out.println("What cycle are you on?");
        cycle = input.nextInt();
        
        lifter.setCycle(cycle);
        System.out.println(lifter.getLifts());
    }

    private static void fillInLiftData(String path, Lifter lifter) {
        int oneRM = 0;
        Path existingPath = Paths.get(path);

        Scanner fileIn = null;

        try {
            fileIn = new Scanner(existingPath);
        } catch (IOException e){
            System.out.println("Exception: There was an issue reading the existing workout log: " + e.getMessage());
            System.exit(1);
        }

        try {
            oneRM = fileIn.nextInt();
            lifter.setBench(oneRM);
            fileIn.nextLine();

            oneRM = fileIn.nextInt();
            lifter.setSquat(oneRM);
            fileIn.nextLine();

            oneRM = fileIn.nextInt();
            lifter.setPress(oneRM);
            fileIn.nextLine();

            oneRM = fileIn.nextInt();
            lifter.setDead(oneRM);
            fileIn.nextLine();

        } catch (java.util.InputMismatchException e) {
            System.out.println("Input did not match: " + e.getMessage());
        }

    }


    private static void writeToFile(Lifter lifter, String path) {
        try {
            FileWriter writer = new FileWriter(path);
            writer.write(lifter.getBench() + " -> Bench");
            writer.write("\n");
            writer.write(lifter.getSquat() + " -> Squat");
            writer.write("\n");
            writer.write(lifter.getPress() + " -> Overhead Press");
            writer.write("\n");
            writer.write(lifter.getDead() + " -> Deadlift");
            writer.write("\n");
            writer.write(lifter.getName() + " -> Name");
            writer.write("\n");
            writer.close();

        } catch (IOException e) {
            System.out.println("Uh-oh - we weren't able to update the workout.txt file.");
        }
    }

    private static boolean checkForExistingFile(String userName) {
        String path = userName + "-workoutData.txt";
        File f = new File(path);
        return f.exists();
    }

}
