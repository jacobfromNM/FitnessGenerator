import java.util.HashMap;

public class Lifter {
    private String name;
    private int cycle;
    private int oneRepMaxBench;
    private int oneRepMaxSquat;
    private int oneRepMaxPress;
    private int oneRepMaxDeadLift;

    public Lifter (String name) {
        this.name = name;
        // System.out.printf("Name successfully set to: %s!%n", this.name);
    }

    public void setBench (int oneRM) {
        this.oneRepMaxBench = oneRM;
        // System.out.printf("Bench 1RM set to: %s%n", this.oneRepMaxBench);
    }

    public void setCycle(int cycle) {
        this.cycle = cycle;
        // System.out.printf("Cycle set to %s%n", this.cycle);
    }

    public void setSquat (int oneRM) {
        this.oneRepMaxSquat = oneRM;
        // System.out.printf("Squat 1RM set to: %s%n", this.oneRepMaxSquat);
    }

    public void setPress (int oneRM) {
        this.oneRepMaxPress = oneRM;
        // System.out.printf("Overhead Press 1RM set to: %s%n", this.oneRepMaxPress);
    }

    public void setDead (int oneRM) {
        this.oneRepMaxDeadLift = oneRM;
        // System.out.printf("Deadlift 1RM set to: %s%n", this.oneRepMaxDeadLift);
    }

    public String getName() {
        return this.name;
    }

    public int getBench() {
        return this.oneRepMaxBench;
    }

    public int getSquat() {
        return this.oneRepMaxSquat;
    }

    public int getPress() {
        return this.oneRepMaxPress;
    }

    public int getDead() {
        return this.oneRepMaxDeadLift;
    }

    private String stringBuilder(double [] cycleArray, String [] cycleStringArray) {
        HashMap<Double, String> plates = new HashMap<Double, String>();
        String finalString = "";

        plates.put(45.0, "Bar");
        plates.put(50.0, "Bar + 2.5");
        plates.put(55.0, "Bar + 5");
        plates.put(60.0, "Bar + 5 + 2.5");
        plates.put(65.0, "Bar + 10");
        plates.put(70.0, "Bar + 10 + 2.5");
        plates.put(75.0, "Bar + 15");
        plates.put(80.0, "Bar + 15 + 2.5");
        plates.put(85.0, "Bar + 15 + 5");
        plates.put(90.0, "Bar + 15 + 5 + 2.5");
        plates.put(95.0, "Bar + 25");
        plates.put(100.0, "Bar + 25 + 2.5");
        plates.put(105.0, "Bar + 25 + 5");
        plates.put(110.0, "Bar + 25 + 5 + 2.5");
        plates.put(115.0, "Bar + 35");
        plates.put(120.0, "Bar + 35 + 2.5");
        plates.put(125.0, "Bar + 35 + 5");
        plates.put(130.0, "Bar + 35 + 5 + 2.5");
        plates.put(135.0, "Bar + 45");
        plates.put(140.0, "Bar + 45 + 2.5");
        plates.put(145.0, "Bar + 45 + 5");
        plates.put(150.0, "Bar + 45 + 5 + 2.5");
        plates.put(155.0, "Bar + 45 + 10");
        plates.put(160.0, "Bar + 45 + 10 + 2.5");
        plates.put(165.0, "Bar + 45 + 15");
        plates.put(170.0, "Bar + 45 + 15 + 2.5");
        plates.put(175.0, "Bar + 45 + 15 + 5");
        plates.put(180.0, "Bar + 45 + 15 + 5 + 2.5");
        plates.put(185.0, "Bar + 45 + 25");
        plates.put(190.0, "Bar + 45 + 25 + 2.5");
        plates.put(195.0, "Bar + 45 + 25 + 5");
        plates.put(200.0, "Bar + 45 + 25 + 5 + 2.5");
        plates.put(205.0, "Bar + 45 + 35");
        plates.put(210.0, "Bar + 45 + 35 + 2.5");
        plates.put(215.0, "Bar + 45 + 35 + 5");
        plates.put(220.0, "Bar + 45 + 35 + 5 + 2.5");
        plates.put(225.0, "Bar + 45 + 45");
        plates.put(230.0, "Bar + 45 + 45 + 2.5");
        plates.put(235.0, "Bar + 45 + 45 + 5");
        plates.put(240.0, "Bar + 45 + 45 + 5 + 2.5");
        plates.put(245.0, "Bar + 45 + 45 + 10");
        plates.put(250.0, "Bar + 45 + 45 + 10 + 2.5");
        plates.put(255.0, "Bar + 45 + 45 + 15");
        plates.put(260.0, "Bar + 45 + 45 + 15 + 2.5");
        plates.put(265.0, "Bar + 45 + 45 + 15 + 5");
        plates.put(270.0, "Bar + 45 + 45 + 15 + 5 + 2.5");
        plates.put(275.0, "Bar + 45 + 45 + 25");
        plates.put(280.0, "Bar + 45 + 45 + 25 + 2.5");
        plates.put(285.0, "Bar + 45 + 45 + 25 + 5");
        plates.put(290.0, "Bar + 45 + 45 + 25 + 5 + 2.5");
        plates.put(295.0, "Bar + 45 + 45 + 35");
        plates.put(300.0, "Bar + 45 + 45 + 35 + 2.5");
        plates.put(305.0, "Bar + 45 + 45 + 35 + 5");
        plates.put(310.0, "Bar + 45 + 45 + 35 + 5 + 2.5");
        plates.put(315.0, "Bar + 45 + 45 + 35 + 10");
        plates.put(320.0, "Bar + 45 + 45 + 35 + 10 + 2.5");
        plates.put(325.0, "Bar + 45 + 45 + 35 + 15");
        plates.put(330.0, "Bar + 45 + 45 + 35 + 15 + 2.5");
        plates.put(335.0, "Bar + 45 + 45 + 35 + 15 + 5");
        plates.put(340.0, "Bar + 45 + 45 + 35 + 15 + 5 + 2.5");
        plates.put(345.0, "Bar + 45 + 45 + 35 + 25");
        plates.put(350.0, "Bar + 45 + 45 + 35 + 25 + 2.5");
        plates.put(355.0, "Bar + 45 + 45 + 35 + 25 + 5");
        plates.put(360.0, "Bar + 45 + 45 + 35 + 25 + 5 + 2.5");
        plates.put(365.0, "Bar + 45 + 45 + 35 + 25 + 10");
        plates.put(370.0, "Bar + 45 + 45 + 35 + 25 + 10 + 2.5");
        plates.put(375.0, "Bar + 45 + 45 + 35 + 25 + 15");
        plates.put(380.0, "Bar + 45 + 45 + 35 + 25 + 15 + 2.5");
        plates.put(385.0, "Bar + 45 + 45 + 35 + 25 + 15 + 5");
        plates.put(390.0, "Bar + 45 + 45 + 35 + 25 + 15 + 5 + 2.5");
        plates.put(395.0, "Bar + 45 + 45 + 35 + 25 + 15 + 10");
        plates.put(400.0, "Bar + 45 + 45 + 35 + 25 + 15 + 10 + 2.5");
        plates.put(405.0, "Bar + 45 + 45 + 35 + 25 + 15 + 10 + 5");
        plates.put(410.0, "Bar + 45 + 45 + 35 + 25 + 15 + 10 + 5 + 2.5");

        finalString += "\nWARMUP:\n";
        finalString += " -> Jump Rope (25)\n -> Body Squats (10)\n -> Mountain Climbers (10)\n -> (x3)\n -> Long Jumps (10-20)\n";
        finalString += "\nMAIN LIFTS:";
        finalString += "\nBench (1RM: " + oneRepMaxBench + " -> " + plates.get((double)oneRepMaxBench) + ")\n";

        for (int i = 0; i < cycleArray.length; i++) {
            finalString += " • " + "(" + String.format("%.0f", cycleArray[i] * 100) + "%) "
                        + cycleStringArray[i] + " "
                        + String.format("%.0f", 5 * (Math.floor(Math.abs(oneRepMaxBench * cycleArray[i] / 5))))
                        + "  ->  "
                        + plates.get(5 * (Math.floor(Math.abs(oneRepMaxBench * cycleArray[i] / 5)))) + "\n";
        }

        finalString += "\nSquat (1RM: " + oneRepMaxSquat + " -> " + plates.get((double)oneRepMaxSquat) + ")\n";
        for (int i = 0; i < cycleArray.length; i++) {
            finalString += " • " + "(" + String.format("%.0f",cycleArray[i] * 100) + "%) "
                        + cycleStringArray[i] + " "
                        + String.format("%.0f", 5 * (Math.floor(Math.abs(oneRepMaxSquat * cycleArray[i] / 5))))
                        + "  ->  "
                        + plates.get(5 * (Math.floor(Math.abs(oneRepMaxSquat * cycleArray[i] / 5)))) + "\n";
        }

        finalString += "\nDeadlift (1RM: " + oneRepMaxDeadLift + " -> " + plates.get((double)oneRepMaxDeadLift) + ")\n";
        for (int i = 0; i < cycleArray.length; i++) {
            finalString += " • " + "("
                        + String.format("%.0f", cycleArray[i] * 100) + "%) "
                        + cycleStringArray[i] + " "
                        + String.format("%.0f", 5 * (Math.floor(Math.abs(oneRepMaxDeadLift * cycleArray[i] / 5))))
                        + "  -> "
                        +  plates.get(5 * (Math.floor(Math.abs(oneRepMaxDeadLift * cycleArray[i] / 5)))) + "\n";
        }

        finalString += "\nOverhead Press (1RM: " + oneRepMaxPress +  " -> " + plates.get((double)oneRepMaxPress) + ")\n";
        for (int i = 0; i < cycleArray.length; i++) {
            finalString += " • " + "("
                        + String.format("%.0f", cycleArray[i] * 100) + "%) "
                        + cycleStringArray[i] + " "
                        + String.format("%.0f", 5 * (Math.floor(Math.abs(oneRepMaxPress * cycleArray[i] / 5))))
                        + "  ->  "
                        + plates.get(5 * (Math.floor(Math.abs(oneRepMaxPress * cycleArray[i] / 5)))) + "\n";
        }

        return finalString;
    }

    public String getLifts() {
        double [] cycle1 = {0.35, 0.45, 0.55, 0.65, 0.75, 0.85};
        String [] cycle1P = {"Warmup (x5)", "Warmup (x5)", "Warmup (x3)", "Main (x5)", "Main (x5)", "Main (x5)"};

        double [] cycle2 = {0.35, 0.45, 0.55, 0.70, 0.80, 0.90};
        String [] cycle2P = {"Warmup (x5)", "Warmup (x5)", "Warmup (x3)", "Main (x3)", "Main (x3)", "Main (x3)"};

        double [] cycle3 = {0.35, 0.45, 0.55, 0.75, 0.85, 0.95};
        String [] cycle3P = {"Warmup (x5)", "Warmup (x5)", "Warmup (x3)", "Main (x5)", "Main (x3)", "Main (x1)"};

        double [] cycle4 = {0.35, 0.45, 0.55, 0.65, 0.70, 0.75};
        String [] cycle4P = {"Warmup (x5)", "Warmup (x5)", "Warmup (x3)", "Main (x7-10)", "Main (x7-10)", "Main (x7-10)"};

        switch (this.cycle) {
        case 1:
            return stringBuilder(cycle1, cycle1P);
        case 2:
            return stringBuilder(cycle2, cycle2P);
        case 3:
            return stringBuilder(cycle3, cycle3P);
        case 4:
            return stringBuilder(cycle4, cycle4P);
        default:
            return "Well, this is embarrassing!";
        }

    }

    @Override
    public String toString() {
        return
            name + "'s 1RM are: " + "\n" +
            "Bench: " + oneRepMaxBench + "\n" +
            "Squat: " + oneRepMaxSquat + "\n" +
            "Press: " + oneRepMaxPress + "\n" +
            "Dead Lift: " + oneRepMaxDeadLift + "\n";
    }

}
