def main(args=None):
    rclpy.init()
    logger = rclpy.logging.get_logger("moveit_py.pose_goal")

    # instantiate MoveItPy instance and get planning component
    robot = MoveItPy(node_name="moveit_py")
    robot_arm = robot.get_planning_component("robot_arm")
    logger.info("MoveItPy instance created")
    
    # set plan start state to current state
    robot_arm.set_start_state_to_current_state()

    # set pose goal with PoseStamped message
    pose_goal = PoseStamped()
    pose_goal.header.frame_id = "robot_link0"
    pose_goal.pose.orientation.w = 1.0
    pose_goal.pose.position.x = 0.28
    pose_goal.pose.position.y = -0.2
    pose_goal.pose.position.z = 0.5
    robot_arm.set_goal_state(pose_stamped_msg=pose_goal, pose_link="robot_link8")

    # plan to goal
    plan_and_execute(robot, robot_arm, logger)

if __name__ == '__main__':
    main()
