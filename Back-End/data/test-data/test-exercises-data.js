const exercises = [
  {
    name: "Incline Hammer Curls",
    type: "strength",
    muscle: "biceps",
    equipment: "dumbbell",
    difficulty: "beginner",
    instructions:
      "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position.",
  },

  {
    name: "EZ-bar spider curl",
    type: "strength",
    muscle: "biceps",
    equipment: "barbell",
    difficulty: "advanced",
    instructions:
      "Start out by setting the bar on the part of the preacher bench that you would normally sit on. Make sure to align the barbell properly so that it is balanced and will not fall off. Move to the front side of the preacher bench (the part where the arms usually lay) and position yourself to lay at a 45 degree slant with your torso and stomach pressed against the front side of the preacher bench. Make sure that your feet (especially the toes) are well positioned on the floor and place your upper arms on top of the pad located on the inside part of the preacher bench. Use your arms to grab the barbell with a supinated grip (palms facing up) at about shoulder width apart or slightly closer from each other. Slowly begin to lift the barbell upwards and exhale. Hold the contracted position for a second as you squeeze the biceps. Slowly begin to bring the barbell back to the starting position as your breathe in. . Repeat for the recommended amount of repetitions.  Variation: You can also use dumbbells when performing this exercise. Just make sure you place the dumbbells on the part of the preacher bench where you would normally sit properly.",
  },
  {
    name: "Landmine twist",
    type: "strength",
    muscle: "abdominals",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete.",
  },
  {
    name: "Elbow plank",
    type: "strength",
    muscle: "abdominals",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "Get into a prone position on the floor, supporting your weight on your toes and your forearms. Your arms are bent and directly below the shoulder. Keep your body straight at all times, and hold this position as long as possible. To increase difficulty, an arm or leg can be raised.",
  },
  {
    name: "Smith Machine Calf Raise",
    type: "strength",
    muscle: "calves",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders. Take the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position. Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down. Return slowly to the starting position as you breathe in while lowering your heels. Repeat for the recommended amount of repetitions.",
  },
  {
    name: "Standing Calf Raises",
    type: "strength",
    muscle: "calves",
    equipment: "machine",
    difficulty: "beginner",
    instructions:
      "Adjust the padded lever of the calf raise machine to fit your height. Place your shoulders under the pads provided and position your toes facing forward (or using any of the two other positions described at the beginning of the chapter). The balls of your feet should be secured on top of the calf block with the heels extending off it. Push the lever up by extending your hips and knees until your torso is standing erect. The knees should be kept with a slight bend; never locked. Toes should be facing forward, outwards or inwards as described at the beginning of the chapter. This will be your starting position. Raise your heels as you breathe out by extending your ankles as high as possible and flexing your calf. Ensure that the knee is kept stationary at all times. There should be no bending at any time. Hold the contracted position by a second before you start to go back down. Go back slowly to the starting position as you breathe in by lowering your heels as you bend the ankles until calves are stretched. Repeat for the recommended amount of repetitions.  Caution: If you suffer from lower back problems, a better exercise is the calf press as during a standing calf raise the back has to support the weight being lifted. Also, maintain your back straight and stationary at all times. Rounding of the back can cause lower back injury. Variations: There are several other ways to perform a standing calf raise. A barbell instead of a machine can be used instead as well as dumbbells, one leg or two legs at a time. Refer to the exercise descriptions of these movements below. A smith machine can be used for calf raises as well.",
  },
  {
    name: "Dumbbell Bench Press",
    type: "strength",
    muscle: "chest",
    equipment: "dumbbell",
    difficulty: "intermediate",
    instructions:
      "Lie down on a flat bench with a dumbbell in each hand resting on top of your thighs. The palms of your hands will be facing each other. Then, using your thighs to help raise the dumbbells up, lift the dumbbells one at a time so that you can hold them in front of you at shoulder width. Once at shoulder width, rotate your wrists forward so that the palms of your hands are facing away from you. The dumbbells should be just to the sides of your chest, with your upper arm and forearm creating a 90 degree angle. Be sure to maintain full control of the dumbbells at all times. This will be your starting position. Then, as you breathe out, use your chest to push the dumbbells up. Lock your arms at the top of the lift and squeeze your chest, hold for a second and then begin coming down slowly. Tip: Ideally, lowering the weight should take about twice as long as raising it. Repeat the movement for the prescribed amount of repetitions of your training program.  Caution: When you are done, do not drop the dumbbells next to you as this is dangerous to your rotator cuff in your shoulders and others working out around you. Just lift your legs from the floor bending at the knees, twist your wrists so that the palms of your hands are facing each other and place the dumbbells on top of your thighs. When both dumbbells are touching your thighs simultaneously push your upper torso up (while pressing the dumbbells on your thighs) and also perform a slight kick forward with your legs (keeping the dumbbells on top of the thighs). By doing this combined movement, momentum will help you get back to a sitting position with both dumbbells still on top of your thighs. At this moment you can place the dumbbells on the floor. Variations: Another variation of this exercise is to perform it with the palms of the hands facing each other. Also, you can perform the exercise with the palms facing each other and then twisting the wrist as you lift the dumbbells so that at the top of the movement the palms are facing away from the body. I personally do not use this variation very often as it seems to be hard on my shoulders.",
  },
  {
    name: "Pushups",
    type: "strength",
    muscle: "chest",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "Lie on the floor face down and place your hands about 36 inches apart while holding your torso up at arms length. Next, lower yourself downward until your chest almost touches the floor as you inhale. Now breathe out and press your upper body back up to the starting position while squeezing your chest. After a brief pause at the top contracted position, you can begin to lower yourself downward again for as many repetitions as needed.  Variations: If you are new at this exercise and do not have the strength to perform it, you can either bend your legs at the knees to take off resistance or perform the exercise against the wall instead of the floor. For the most advanced lifters, you can place your feet at a high surface such as a bench in order to increase the resistance and to target the upper chest more.",
  },
  {
    name: "Single-leg cable hip extension",
    type: "strength",
    muscle: "glutes",
    equipment: "cable",
    difficulty: "intermediate",
    instructions:
      'Hook a leather ankle cuff to a low cable pulley and then attach the cuff to your ankle. Face the weight stack from a distance of about two feet, grasping the steel frame for support. While keeping your knees and hips bent slightly and your abs tight, contract your glutes to slowly "kick" the working leg back in a semicircular arc as high as it will comfortably go as you breathe out. Tip: At full extension, squeeze your glutes for a second in order to achieve a peak contraction. Now slowly bring your working leg forward, resisting the pull of the cable until you reach the starting position. Repeat for the recommended amount of repetitions. Switch legs and repeat the movement for the other side.  Variations: You can perform this exercise with exercise bands.',
  },
  {
    name: "Glute bridge",
    type: "strength",
    muscle: "glutes",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "Lie flat on the floor on your back with the hands by your side and your knees bent. Your feet should be placed around shoulder width. This will be your starting position. Pushing mainly with your heels, lift your hips off the floor while keeping your back straight. Breathe out as you perform this part of the motion and hold at the top for a second. Slowly go back to the starting position as you breathe in.  Variations: You can perform this exercise one leg at a time.",
  },
  {
    name: "Barbell Deadlift",
    type: "strength",
    muscle: "hamstrings",
    equipment: "barbell",
    difficulty: "advanced",
    instructions:
      "Approach the bar so that it is centered over your feet. Your feet should be about hip-width apart. Bend at the hip to grip the bar at shoulder-width allowing your shoulder blades to protract. Typically, you would use an alternating grip. With your feet and your grip set, take a big breath and then lower your hips and flex the knees until your shins contact the bar. Look forward with your head. Keep your chest up and your back arched, and begin driving through the heels to move the weight upward. After the bar passes the knees aggressively pull the bar back, pulling your shoulder blades together as you drive your hips forward into the bar. Lower the bar by bending at the hips and guiding it to the floor.",
  },
  {
    name: "Romanian Deadlift With Dumbbells",
    type: "strength",
    muscle: "hamstrings",
    equipment: "dumbbell",
    difficulty: "beginner",
    instructions:
      "Begin in a standing position with a dumbbell in each hand. Ensure that your back is straight and stays that way for the duration of the exercise. Allow your arms to hang perpendicular to the floor, with the wrists pronated and the elbows pointed to your sides. This will be your starting position. Initiate the movement by flexing your hips, slowly pushing your butt as far back as you can. This should entail a horizontal movement of the hips, rather than a downward movement. The knees should only partially bend, and your weight should remain on your heels. Drive your butt back as far as you can, which should generate tension in your hamstrings as your hands approach knee level. Maintain an arch in your back throughout the exercise. When your hips cannot perform any further backward movement, pause, and then slowly return to the starting position by extending the hips.",
  },
  {
    name: "Back extension",
    type: "strength",
    muscle: "lower_back",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "Lie face down on a hyperextension bench, tucking your ankles securely under the footpads. Adjust the upper pad if possible so your upper thighs lie flat across the wide pad, leaving enough room for you to bend at the waist without any restriction. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you feel a nice stretch on the hamstrings and you can no longer keep going without a rounding of the back. Tip: Never round the back as you perform this exercise. Also, some people can go farther than others. The key thing is that you go as far as your body allows you to without rounding the back. Slowly raise your torso back to the initial position as you inhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed without a hyperextension bench, but in this case you will need a spotter. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift.",
  },
  {
    name: "Hyperextensions With No Hyperextension Bench",
    type: "strength",
    muscle: "lower_back",
    equipment: "body_only",
    difficulty: "beginner",
    instructions:
      "With someone holding down your legs, slide yourself down to the edge a flat bench until your hips hang off the end of the bench. Tip: Your entire upper body should be hanging down towards the floor. Also, you will be in the same position as if you were on a hyperextension bench but the range of motion will be shorter due to the height of the flat bench vs. that of the hyperextension bench. With your body straight, cross your arms in front of you (my preference) or behind your head. This will be your starting position. Tip: You can also hold a weight plate for extra resistance in front of you under your crossed arms. Start bending forward slowly at the waist as far as you can while keeping your back flat. Inhale as you perform this movement. Keep moving forward until you almost touch the floor or you feel a nice stretch on the hamstrings (whichever comes first). Tip: Never round the back as you perform this exercise. Slowly raise your torso back to the initial position as you exhale. Tip: Avoid the temptation to arch your back past a straight line. Also, do not swing the torso at any time in order to protect the back from injury. Repeat for the recommended amount of repetitions.  Variations: This exercise can also be performed using a hyperextension bench. Also, a similar exercise to this one is the good morning and the stiff-legged deadlift.",
  },
  {
    name: "Superman",
    type: "stretching",
    muscle: "lower_back",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "To begin, lie straight and face down on the floor or exercise mat. Your arms should be fully extended in front of you. This is the starting position. Simultaneously raise your arms, legs, and chest off of the floor and hold this contraction for 2 seconds. Tip: Squeeze your lower back to get the best results from this exercise. Remember to exhale during this movement. Note: When holding the contracted position, you should look like superman when he is flying. Slowly begin to lower your arms, legs and chest back down to the starting position while inhaling. Repeat for the recommended amount of repetitions prescribed in your program.  Variations: You can also perform this exercise using one arm and leg at a time. Simply elevating your left leg, arm and side of your chest and do the same with the right side.",
  },
  {
    name: "T-Bar Row with Handle",
    type: "strength",
    muscle: "middle_back",
    equipment: "other",
    difficulty: "intermediate",
    instructions:
      "Position a bar into a landmine or in a corner to keep it from moving. Load an appropriate weight onto your end. Stand over the bar, and position a Double D row handle around the bar next to the collar. Using your hips and legs, rise to a standing position. Assume a wide stance with your hips back and your chest up. Your arms should be extended. This will be your starting position. Pull the weight to your upper abdomen by retracting the shoulder blades and flexing the elbows. Do not jerk the weight or cheat during the movement. After a brief pause, return to the starting position.",
  },
  {
    name: "Reverse-grip bent-over row",
    type: "strength",
    muscle: "middle_back",
    equipment: "barbell",
    difficulty: "intermediate",
    instructions:
      "Stand erect while holding a barbell with a supinated grip (palms facing up). Bend your knees slightly and bring your torso forward, by bending at the waist, while keeping the back straight until it is almost parallel to the floor. Tip: Make sure that you keep the head up. The barbell should hang directly in front of you as your arms hang perpendicular to the floor and your torso. This is your starting position. While keeping the torso stationary, lift the barbell as you breathe out, keeping the elbows close to the body and not doing any force with the forearm other than holding the weights. On the top contracted position, squeeze the back muscles and hold for a second. Slowly lower the weight again to the starting position as you inhale. Repeat for the recommended amount of repetitions.  Caution:  This exercise is not recommended for people with back problems. A Low Pulley Row is a better choice for people with back issues. Also, just like with the bent knee dead-lift, if you have a healthy back, ensure perfect form and never slouch the back forward as this can cause back injury. Be cautious as well with the weight used; in case of doubt, use less weight rather than more.  Variations: You can perform the same exercise using a pronated (palms facing out) grip or using dumbbells.",
  },
  {
    name: "Barbell Full Squat",
    type: "strength",
    muscle: "quadriceps",
    equipment: "barbell",
    difficulty: "advanced",
    instructions:
      "This exercise is best performed inside a squat rack for safety purposes. To begin, first set the bar on a rack just above shoulder level. Once the correct height is chosen and the bar is loaded, step under the bar and place the back of your shoulders (slightly below the neck) across it. Hold on to the bar using both arms at each side and lift it off the rack by first pushing with your legs and at the same time straightening your torso. Step away from the rack and position your legs using a shoulder-width medium stance with the toes slightly pointed out. Keep your head up at all times and maintain a straight back. This will be your starting position. Begin to slowly lower the bar by bending the knees and sitting back with your hips as you maintain a straight posture with the head up. Continue down until your hamstrings are on your calves. Inhale as you perform this portion of the movement. Begin to raise the bar as you exhale by pushing the floor with the heel or middle of your foot as you straighten the legs and extend the hips to go back to the starting position. Repeat for the recommended amount of repetitions.  This type of squat allows a greater range of motion, and allows the trunk to maintain a more vertical position than other types of squats, due to foot position and the higher bar position.",
  },
  {
    name: "Jumping rope",
    type: "cardio",
    muscle: "quadriceps",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "Hold an end of the rope in each hand. Position the rope behind you on the ground. Raise your arms up and turn the rope over your head bringing it down in front of you. When it reaches the ground, jump over it. Find a good turning pace that can be maintained. Different speeds and techniques can be used to introduce variation. Rope jumping is exciting, challenges your coordination, and requires a lot of energy. A 150 lb person will burn about 350 calories jumping rope for 30 minutes, compared to over 450 calories running.",
  },
  {
    name: "Smith machine shrug",
    type: "strength",
    muscle: "traps",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "To begin, set the bar height on the smith machine around the middle of your thighs. Once the correct height is chosen and the bar is loaded, grab the bar using a pronated grip (palms facing you) shoulder width apart from each other. Lift the barbell up and fully extend your arms with your back straight. This is the starting position. While exhaling, elevate the bar by raising your shoulders until they come close to touching your ears. Hold the contraction for a second before lowering the bar back down to the starting position while inhaling. Repeat for the recommended amount of repetitions.  Variations:  This exercise can be performed using a squat rack with a barbell. However, be careful not to select a weight that is so heavy that it causes you to break good form as you do not have the support of the smith machine for this variation. Too much weight can harm your back. You can also use dumbbells to perform this exercise.",
  },
  {
    name: "Leverage Shrug",
    type: "strength",
    muscle: "traps",
    equipment: "machine",
    difficulty: "intermediate",
    instructions:
      "Load the pins to an appropriate weight. Position yourself directly between the handles. Grasp the top handles with a comfortable grip, and then lower your hips as you take a breath. Look forward with your head and keep your chest up. Drive through the floor with your heels, extending your hips and knees as you rise to a standing position. Keep your arms straight throughout the movement, finishing with your shoulders back. This will be your starting position. Raise the weight by shrugging the shoulders towards your ears, moving straight up and down. Pause at the top of the motion, and then return the weight to the starting position.",
  },
  {
    name: "Triceps dip",
    type: "strength",
    muscle: "triceps",
    equipment: "body_only",
    difficulty: "intermediate",
    instructions:
      "To get into the starting position, hold your body at arm's length with your arms nearly locked above the bars. Now, inhale and slowly lower yourself downward. Your torso should remain upright and your elbows should stay close to your body. This helps to better focus on tricep involvement. Lower yourself until there is a 90 degree angle formed between the upper arm and forearm. Then, exhale and push your torso back up using your triceps to bring your body back to the starting position. Repeat the movement for the prescribed amount of repetitions.  Variations: If you are new at this exercise and do not have the strength to perform it, use a dip assist machine if available. These machines use weight to help you push your bodyweight. Otherwise, a spotter holding your legs can help. More advanced lifters can add weight to the exercise by using a weight belt that allows the addition of weighted plates.",
  },
  {
    name: "Decline EZ-bar skullcrusher",
    type: "strength",
    muscle: "triceps",
    equipment: "e-z_curl_bar",
    difficulty: "advanced",
    instructions:
      "Secure your legs at the end of the decline bench and slowly lay down on the bench. Using a close grip (a grip that is slightly less than shoulder width), lift the EZ bar from the rack and hold it straight over you with your arms locked and elbows in. The arms should be perpendicular to the floor. This will be your starting position. Tip: In order to protect your rotator cuff, it is best if you have a spotter help you lift the barbell off the rack. As you breathe in and you keep the upper arms stationary, bring the bar down slowly by moving your forearms in a semicircular motion towards you until you feel the bar slightly touch your forehead. Breathe in as you perform this portion of the movement. Lift the bar back to the starting position by contracting the triceps and exhaling. Repeat until the recommended amount of repetitions is performed.  Variations: You can use a straight bar or dumbbells to perform this movement. You can also perform it on a flat bench as well.",
  },
  {
    name: "Treadmill",
    type: "cardio",
    muscle: "quadriceps",
    equipment: "treadmill",
    difficulty: "beginner",
    instructions:
      "Start at an easy pace and increase the treadmill's speed to increase the intensity of your workout. You can also change the incline of the treadmill; a steeper incline will increase the intensity of your workout. Be care ful when stepping onto the machine. Make sure to use the safety clip.",
  },
  {
    name: "Exercise Bike",
    type: "cardio",
    muscle: "quadriceps",
    equipment: "exercise bike",
    difficulty: "beginner",
    instructions:
      "Start at an easy pace and increase your speed to increase the intensity of your workout. You can also change the resistance of the bike; a higher resistance will increase the intensity of your workout. Be care ful when getting onto the machine.",
  },
  {
    name: "Standing Hamstring Stretch",
    type: "stretching",
    muscle: "hamstrings",
    equipment: "body_only",
    difficulty: "beginner",
    instructions:
      "Stand tall with your feet hip-width apart, knees slightly bent, arms by your sides. Exhale as you bend forward at the hips, lowering your head toward the floor while keeping your head, neck, and shoulders relaxed. Wrap your arms around backs of your legs and hold anywhere from 45 seconds to 2 minutes. Bend your knees and roll up when you're done.",
  },
  {
    name: "Tricep Stretch",
    type: "stretching",
    muscle: "triceps",
    equipment: "body_only",
    difficulty: "beginner",
    instructions:
      "The triceps stretch—one of the most popular upper-body stretches. It loosens up the muscles on the back of your upper arms, making it great to do after a chest or shoulders workout. Kneel, sit, or stand tall with feet hip-width apart, arms extended overhead. Bend your right elbow and reach your right hand to touch the top middle of your back. Reach your left hand overhead and grasp just below your right elbow. Gently pull your right elbow down and toward your head. Switch arms and repeat.",
  },
  {
    name: "Butterfly Stretch",
    type: "stretching",
    muscle: "glutes",
    equipment: "body_only",
    difficulty: "beginner",
    instructions:
      "Sit tall on the floor with the soles of your feet together, knees bent out to sides. Hold onto your ankles or feet, engage your abs, and slowly lower your body toward your feet as far as you can while pressing your knees toward the floor. If you're too tight to bend over, simply press your knees down. Hold this stretch for 30 seconds to 2 minutes.",
  },
  {
    name: "Lunging Hip Flexor",
    type: "stretching",
    muscle: "quadriceps",
    equipment: "body_only",
    difficulty: "beginner",
    instructions:
      "Kneel on your left knee. Place your right foot flat on the floor in front of you, knee bent. Lean forward, stretching your left hip toward the floor. Squeeze your butt; this will allow you to stretch your hip flexor even more. Hold for 30 seconds to 2 minutes. Switch sides and repeat.",
  },
];

exercises.forEach((exercise, index) => {
  return (exercise._id = index + 1);
});

module.exports = { exercises };
