package com.example.menu;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@Controller
public class MenuController {

    private final Random random = new Random();

    private final List<String> entrees = List.of(
        "Salade d'amour aux fraises", "Velouté de potiron doux", "Toasts au cœur de chèvre"
    );
    private final List<String> plats = List.of(
        "Risotto crémeux aux champignons", "Cœur de filet mignon", "Pâtes tendres à la truffe"
    );
    private final List<String> desserts = List.of(
        "Fondant au chocolat", "Tiramisu passion", "Fraises à la chantilly"
    );
    private final List<String> boissons = List.of(
        "Thé aux roses", "Jus de fruits rouges", "Cocktail pétillant d'amour"
    );

    private final List<String> motsDoux = List.of(
        "Tu es mon soleil même les jours de pluie ☀️",
        "Chaque instant avec toi est un trésor 💎",
        "Ton sourire éclaire ma journée 🌼",
        "Je t’aime plus que les étoiles dans le ciel ✨",
        "Quand je pense à toi, mon cœur fait des pirouettes 💞",
        "Être avec toi, c'est comme rentrer à la maison 🏠",
        "Ton regard me fait fondre chaque jour un peu plus 🥰",
        "Si j’avais un vœu, ce serait de te garder près de moi pour toujours 💖",
        "Ton amour est mon refuge dans ce monde 🌍",
        "T’entendre rire est ma musique préférée 🎶",
        "Tu es mon endroit préféré au monde 🌍❤️",
        "Avec toi, chaque jour est une Saint-Valentin 💘",
        "Ton bonheur est la chose la plus précieuse pour moi 💝",
        "Tu fais battre mon cœur plus fort que n'importe quel refrain 🎵",
        "À tes côtés, même le silence est doux 💗",
        "Tu es la poésie de mon quotidien 📖",
        "Tu es la meilleure chose qui me soit arrivée 🌹",
        "Mon cœur t’appartient sans condition 💌",
        "Je tombe amoureux(se) de toi encore et encore chaque jour 🌄",
        "Ta voix apaise toutes mes tempêtes intérieures 🌬️❤️",
        "Je pourrais passer l’éternité à te regarder sourire 😍",
        "Tu es mon miracle quotidien ✨💫",
        "Ton amour m’élève, me rend meilleur(e) 🕊️",
        "Je ne savais pas ce que voulait dire aimer avant toi 💫",
        "Même les mots les plus beaux ne suffisent pas à décrire ce que je ressens pour toi 💕"
    );

    @GetMapping("/")
    public String showMenu(Model model) {
        model.addAttribute("entree", randomItem(entrees));
        model.addAttribute("plat", randomItem(plats));
        model.addAttribute("dessert", randomItem(desserts));
        model.addAttribute("boisson", randomItem(boissons));
        return "menu";
    }

    @ResponseBody
    @GetMapping("/mot-doux")
    public String getMotDoux() {
        return randomItem(motsDoux);
    }

    private String randomItem(List<String> list) {
        return list.get(random.nextInt(list.size()));
    }
}
