using System;

class Program
{
    static void Main()
    {
        int health = 100;
        int score = 0;

        Console.WriteLine("Welcome to the Adventure Game!");
        Console.WriteLine("You are in a dark forest.");

        while (health > 0)
        {
            Console.WriteLine("\nOptions:");
            Console.WriteLine("1. Go deeper into the forest.");
            Console.WriteLine("2. Rest by the campfire.");
            Console.WriteLine("3. Quit the game.");

            Console.Write("Enter your choice: ");
            if (int.TryParse(Console.ReadLine(), out int choice))
            {
                switch (choice)
                {
                    case 1:
                        Console.WriteLine("You go farther into the forest and discover a treasure chest!");
                        score += 10;
                        break;
                    case 2:
                       // filepath: /workspaces/skills-copilot-codespaces-vscode/codechat.cs
using System;

class Program
{
    static void Main()
    {
        int health = 100;
        int score = 0;

        Console.WriteLine("Welcome to the Adventure Game!");
        Console.WriteLine("You are in a dark forest.");

        while (health > 0)
        {
            Console.WriteLine("\nOptions:");
            Console.WriteLine("1. Go deeper into the forest.");
            Console.WriteLine("2. Rest by the campfire.");
            Console.WriteLine("3. Quit the game.");

            Console.Write("Enter your choice: ");
            if (int.TryParse(Console.ReadLine(), out int choice))
            {
                switch (choice)
                {
                    case 1:
                        Console.WriteLine("You go farther into the forest and discover a treasure chest!");
                        score += 10;
                        break;
                    case 2:
                       