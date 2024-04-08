import java.io.*;

public class streamBuffer {
    public static void main(String[] args) {
        try {
            // Create a BufferedReader to read from the console
            BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
            
            // Prompt the user for input
            System.out.print("Enter text (type 'exit' to quit): ");
            
            // Create a BufferedWriter to write to a file
            BufferedWriter writer = new BufferedWriter(new FileWriter("output.txt"));
            
            String input;
            while ((input = reader.readLine()) != null) {
                // Check if the user wants to exit
                if (input.equalsIgnoreCase("exit")) {
                    break;
                }
                
                // Write the input to the file
                writer.write(input);
                writer.newLine(); // Add a newline character after each input line
                
                System.out.print("Enter text (type 'exit' to quit): ");
            }
            
            // Close the input and output streams
            reader.close();
            writer.close();
            
            System.out.println("Input has been written to 'output.txt'.");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
