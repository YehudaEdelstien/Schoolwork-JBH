package Classes;

public class CLcl1 {
    public static void main(String[] args) {
        Time time = new Time(12, 60, 156);
        time.tellTime();
        time.addHours(12);
        time.addMinutes(60);
        time.addSeconds(156);
        time.tellTime();
    }
}

class Time {
    private int hours = 0;
    private int minutes = 0;
    private int seconds = 0;

    public Time (int hours, int minutes, int seconds) {
        addSeconds(seconds);
        addMinutes(minutes);
        addHours(hours);
    }

    public void tellTime() {
        System.out.println(hours+":"+minutes+":"+seconds);
    }

    public void addHours(int hr) {
        this.hours = (this.hours + hr) % 23;
    }

    public void addMinutes(int min) {
        this.minutes = (this.minutes + min) % 60;
        if (min >= 60) {
            addHours(min / 60);
        }
    }

    public void addSeconds(int sec) {
        this.seconds = (this.seconds + sec) % 60;
        if (sec >= 60) {
            addMinutes(sec / 60);
        }
    }
}